import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateContact } from "@/data/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { data, errors } = validateContact(body);

    if (data.website) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          fieldErrors: errors,
          error: "Please correct the highlighted fields.",
        },
        { status: 400 },
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!smtpUser || !smtpPass || !contactToEmail) {
      console.error("Missing SMTP configuration for contact form.");
      return NextResponse.json({ error: "Email service is not configured. Please contact the site administrator." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const emailText = `
New contact form submission

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "N/A"}
Service: ${data.service}

Project details:
${data.message}
`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 12px;">New contact form submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || "N/A"}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space: pre-wrap; background: #f3f4f6; padding: 12px; border-radius: 8px;">${data.message}</div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Intellix Contact" <${smtpUser}>`,
      to: contactToEmail,
      replyTo: data.email,
      subject: `New inquiry: ${data.service}`,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email send failed:", error);
    return NextResponse.json({ error: "Something went wrong while sending your message. Please try again." }, { status: 500 });
  }
}
