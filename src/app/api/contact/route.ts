import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 2000;

const SMTP_HOST = process.env.SMTP_HOST ?? "mail.privateemail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587);
const SMTP_USER = process.env.SMTP_USER ?? "info@lamb.solutions";
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? SMTP_USER;

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

async function sendNotification(data: ContactPayload) {
  if (!SMTP_PASS) {
    console.warn("[contact] SMTP_PASS not set — skipping email notification.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Lamb Solutions sajt" <${SMTP_USER}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject: `Novi upit sa sajta — ${data.name}`,
    text: [
      `Ime: ${data.name}`,
      `Email: ${data.email}`,
      `Firma: ${data.company || "—"}`,
      "",
      data.message,
    ].join("\n"),
  });
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

  console.log("[contact]", { ...result.data, receivedAt: new Date().toISOString() });

  try {
    await sendNotification(result.data);
  } catch (err) {
    console.error("[contact] email send failed", err);
  }

  return NextResponse.json({ ok: true });
}
