import { NextRequest, NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 2000;

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function validate(body: unknown): { data: ContactPayload } | { errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  const record = typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {};

  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const company = typeof record.company === "string" ? record.company.trim() : "";
  const message = typeof record.message === "string" ? record.message.trim() : "";

  if (!name) errors.name = "Ime i prezime su obavezni.";
  else if (name.length > MAX_FIELD_LENGTH) errors.name = "Ime je predugačko.";

  if (!email) errors.email = "Poslovni email je obavezan.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "Unesite ispravnu email adresu.";
  else if (email.length > MAX_FIELD_LENGTH) errors.email = "Email je predugačak.";

  if (company.length > MAX_FIELD_LENGTH) errors.company = "Naziv firme je predugačak.";

  if (!message) errors.message = "Recite nam šta biste želeli da automatizujete.";
  else if (message.length > MAX_FIELD_LENGTH) errors.message = "Poruka je predugačka.";

  if (Object.keys(errors).length > 0) return { errors };
  return { data: { name, email, company, message } };
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "Neispravan zahtev." } },
      { status: 400 },
    );
  }

  const result = validate(body);
  if ("errors" in result) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 });
  }

  // No email/CRM integration wired up yet — submissions are captured here for now.
  console.log("[contact]", { ...result.data, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
