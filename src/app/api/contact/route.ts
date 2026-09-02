import { NextResponse, after } from "next/server";
import nodemailer from "nodemailer";

// Shared by ContactForm and QuickRfqForm — both post a subset of these fields.
interface RfqPayload {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  product?: string;
  weight?: string;
  boxSize?: string;
  quantity?: string;
  ply?: string;
  route?: string;
  message?: string;
  source?: string;
}

const FIELD_LABELS: Record<keyof RfqPayload, string> = {
  name: "Name",
  company: "Company",
  phone: "Phone / WhatsApp",
  email: "Email",
  product: "Product",
  weight: "Weight per box",
  boxSize: "Box size",
  quantity: "Quantity",
  ply: "Ply preference",
  route: "Destination / route",
  message: "Message",
  source: "Source",
};

function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  return nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
}

export async function POST(request: Request) {
  let body: RfqPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const company = body.company?.trim();
  const phone = body.phone?.trim();

  if (!company || !phone) {
    return NextResponse.json(
      { error: "Company name and phone/WhatsApp are required." },
      { status: 400 }
    );
  }

  console.log("[RFQ submission]", JSON.stringify({ ...body, receivedAt: new Date().toISOString() }));

  const transporter = getTransporter();
  if (transporter) {
    const rows = (Object.keys(FIELD_LABELS) as (keyof RfqPayload)[])
      .filter((key) => body[key])
      .map((key) => `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">${FIELD_LABELS[key]}</td><td>${body[key]}</td></tr>`)
      .join("");

    // Send after the response goes out — Gmail SMTP takes several seconds,
    // and the visitor shouldn't wait on it to see the success message.
    after(async () => {
      try {
        const info = await transporter.sendMail({
          from: `"Bhaavya Ecopack Website" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          replyTo: body.email || undefined,
          subject: `New RFQ from ${company} (${body.source || "website"})`,
          html: `<table cellpadding="0" cellspacing="0">${rows}</table>`,
        });
        console.log("[RFQ email sent]", info.messageId, "to:", info.accepted);
      } catch (err) {
        console.error("[RFQ email send failed]", err);
        // Submission was logged above, so nothing is lost even if email delivery fails.
      }
    });
  } else {
    console.warn("[RFQ email] EMAIL_USER / EMAIL_APP_PASSWORD not configured — skipping send.");
  }

  return NextResponse.json({ ok: true });
}
