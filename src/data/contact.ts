export const SERVICES = [
  "Web Development",
  "Graphic Design",
  "Video Editing",
  "BPO Services",
  "Verbosa.ai / Product",
  "Something else",
] as const;

export type ContactField = "name" | "email" | "company" | "service" | "message";
export type ContactErrors = Partial<Record<ContactField, string>>;

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  /** Honeypot: real users never fill this in. */
  website: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Runs on the client (instant feedback) AND the server (the real gate). */
export function validateContact(input: unknown): { data: ContactPayload; errors: ContactErrors } {
  const raw = (typeof input === "object" && input !== null ? input : {}) as Record<string, unknown>;
  const str = (key: string) => (typeof raw[key] === "string" ? (raw[key] as string).trim() : "");

  const data: ContactPayload = {
    name: str("name"),
    email: str("email"),
    company: str("company"),
    service: str("service"),
    message: str("message"),
    website: str("website"),
  };

  const errors: ContactErrors = {};

  if (data.name.length < 2) errors.name = "Please enter your full name.";
  else if (data.name.length > 100) errors.name = "Name is too long.";

  if (!EMAIL_RE.test(data.email) || data.email.length > 254) errors.email = "Enter a valid email address.";

  if (data.company.length > 120) errors.company = "Company name is too long.";

  if (!(SERVICES as readonly string[]).includes(data.service)) errors.service = "Please select a service.";

  if (data.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  else if (data.message.length > 5000) errors.message = "Message is too long (5000 characters max).";

  return { data, errors };
}