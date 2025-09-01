import { NextRequest } from "next/server";

const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
const TG_CHAT_ID = process.env.TG_CHAT_ID; // e.g. -1002730492752

function formatMessage(title: string, data: Record<string, string | string[]>) {
  const lines: string[] = [];
  lines.push(`📩 ${title}`);
  const keys = Object.keys(data).filter((k) => k !== "form" && k !== "redirect");
  for (const key of keys) {
    const val = data[key];
    if (Array.isArray(val)) {
      lines.push(`• ${key}: ${val.join(", ")}`);
    } else if (val) {
      lines.push(`• ${key}: ${val}`);
    }
  }
  return lines.join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const redirect = url.searchParams.get("redirect");

    let data: Record<string, string | string[]> = {};
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      data = await req.json();
    } else {
      const form = await req.formData();
      const tmp: Record<string, string | string[]> = {};
      form.forEach((value, key) => {
        const v = typeof value === "string" ? value : value.name;
        if (key in tmp) {
          const cur = tmp[key];
          tmp[key] = Array.isArray(cur) ? [...cur, v] : [cur, v];
        } else {
          tmp[key] = v;
        }
      });
      data = tmp;
    }

    const title = (data["form"] as string) || "Новая заявка";
    const message = formatMessage(title, {
      ...data,
      page: req.headers.get("referer") || url.origin,
    });

    if (!TG_BOT_TOKEN || !TG_CHAT_ID) {
      console.error("Telegram credentials missing");
      return new Response("Server misconfigured", { status: 500 });
    }

    const tgUrl = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;
    const res = await fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TG_CHAT_ID, text: message, parse_mode: "HTML" }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Telegram error", text);
      return new Response("Failed to deliver", { status: 502 });
    }

    // If explicit redirect provided and not set to "false", follow it
    if (redirect && redirect !== "false") {
      return Response.redirect(new URL(redirect, url.origin), 302);
    }
    // Otherwise, return JSON ok response for XHR-based submissions
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response("Unexpected error", { status: 500 });
  }
}
