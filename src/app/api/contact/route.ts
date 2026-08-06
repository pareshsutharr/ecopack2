import { NextResponse } from "next/server";

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

  // TODO: wire to a real email/CRM provider (e.g. Resend, HubSpot) once one is
  // chosen — for now, submissions land in server logs so nothing is lost.
  console.log("[RFQ submission]", JSON.stringify({ ...body, receivedAt: new Date().toISOString() }));

  return NextResponse.json({ ok: true });
}
