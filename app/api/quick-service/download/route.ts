import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "quick_service_leads.xlsx")
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "No leads file found yet." }, { status: 404 })
    }

    const fileBuffer = fs.readFileSync(filePath)
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Disposition": 'attachment; filename="quick_service_leads.xlsx"',
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
