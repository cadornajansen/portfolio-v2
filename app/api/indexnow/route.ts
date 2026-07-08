import { NextResponse } from "next/server"

const siteUrl = "https://www.jansencadorna.com"
const indexNowKey = "143e41b6ac3e4af29ef1871f61dafcae"

const urls = [
  siteUrl,
  `${siteUrl}/about`,
  `${siteUrl}/projects`,
  `${siteUrl}/stack`,
  `${siteUrl}/certifications`,
]

export async function GET() {
  const response = await fetch("https://www.bing.com/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host: "www.jansencadorna.com",
      key: indexNowKey,
      keyLocation: `${siteUrl}/${indexNowKey}.txt`,
      urlList: urls,
    }),
  })

  const text = await response.text()

  return NextResponse.json({
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    response: text || null,
    submittedUrls: urls,
  })
}