import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import * as XLSX from "xlsx"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, service, location, timestamp } = body

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Name, phone, and service are required." },
        { status: 400 }
      )
    }

    const currentTimestamp =
      timestamp ||
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })

    const newRow = {
      Timestamp: currentTimestamp,
      Name: name.trim(),
      Phone: phone.trim(),
      Service: service,
      Location: location || "Raipur Chhattisgarh",
    }

    // 1. SAVE TO LOCAL EXCEL BACKUP (.xlsx)
    try {
      const dataDir = path.join(process.cwd(), "data")
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true })
      }

      const filePath = path.join(dataDir, "quick_service_leads.xlsx")
      let workbook: XLSX.WorkBook
      let worksheet: XLSX.WorkSheet
      const sheetName = "Leads"

      if (fs.existsSync(filePath)) {
        workbook = XLSX.readFile(filePath)
        worksheet = workbook.Sheets[sheetName]
        if (!worksheet) {
          worksheet = XLSX.utils.json_to_sheet([newRow])
          XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)
        } else {
          const existingData = XLSX.utils.sheet_to_json(worksheet)
          existingData.push(newRow)
          const updatedSheet = XLSX.utils.json_to_sheet(existingData)
          workbook.Sheets[sheetName] = updatedSheet
        }
      } else {
        workbook = XLSX.utils.book_new()
        worksheet = XLSX.utils.json_to_sheet([newRow])
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)
      }

      XLSX.writeFile(workbook, filePath)
    } catch (excelErr) {
      console.error("Local Excel write warning:", excelErr)
    }

    // 2. SYNC TO LIVE GOOGLE SHEET
    const googleWebhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbx41UgML37zomdU41YuZRLQgJVv2vUA86rbmZ3RBVjINuExEIIZzRuqqMjvsKlz5ant/exec"

    if (googleWebhookUrl && googleWebhookUrl.trim() !== "") {
      try {
        await fetch(googleWebhookUrl, {
          method: "POST",
          redirect: "follow",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(newRow),
        })
      } catch (gErr) {
        console.error("Google Sheets Webhook sync warning:", gErr)
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully.",
    })
  } catch (error: any) {
    console.error("Failed to record lead:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to record lead.",
      },
      { status: 500 }
    )
  }
}
