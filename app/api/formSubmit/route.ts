import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ratelimit } from "@/lib/rateLimit";

type Body = {
  username: string;
  email: string;
  message: string;
  subject?: string;
  company?: string; // honeypot
};

export async function POST(req: NextRequest) {
  try {
    // ✅ Rate limit (per IP)
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body: Body = await req.json();

    // ✅ Honeypot (bots fill this)
    if (body.company) {
      return NextResponse.json({ success: true }); // silently ignore
    }

    const { username, email, message, subject } = body;

    // ✅ Validation
    if (!username || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (message.length > 1000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    // ✅ Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SoloTraveler" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: subject || `New message from SoloTraveler`,
      text: `
Name: ${username}
Email: ${email}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
