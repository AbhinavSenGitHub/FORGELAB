import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer relies on Node's net/tls — force the Node.js runtime (not Edge).
export const runtime = "nodejs";
// Submissions are inherently dynamic; never prerender/cache this handler.
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are all required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASSWORD;
  const to = process.env.MAIL_TO ?? user;

  if (!user || !pass) {
    console.error("Mail credentials missing (MAIL_USER / MAIL_PASSWORD).");
    return NextResponse.json({ error: "Mail service not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      // Must send from the authenticated Gmail account; the visitor's address
      // goes in replyTo so you can reply straight to them.
      from: `"${name} (Portfolio)" <${user}>`,
      replyTo: `"${name}" <${email}>`,
      to,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
  }

  // Branded auto-reply to the visitor. Non-fatal: the team notification above
  // already succeeded, so a failed acknowledgement must not fail the request.
  try {
    await transporter.sendMail({
      from: `"FORGELAB" <${user}>`,
      to: email,
      subject: "Thanks for reaching out to FORGELAB°",
      text:
        `Hi ${name},\n\n` +
        `Thanks for reaching out to FORGELAB. We've received your message and ` +
        `our team will connect with you soon.\n\n` +
        `In the meantime, we're already firing up the forge.\n\n` +
        `— Team FORGELAB\nWe forge premium digital experiences.`,
      html: buildAutoReply(name),
    });
  } catch (err) {
    console.error("Auto-reply failed (non-fatal):", err);
  }

  return NextResponse.json({ ok: true });
}

// FORGELAB-themed acknowledgement email. Table + inline styles for email-client
// compatibility; dark luxe palette with the ember accent.
function buildAutoReply(name: string) {
  const safeName = escapeHtml(name);
  return `
  <!DOCTYPE html>
  <html lang="en">
  <body style="margin:0;padding:0;background:#0a0a0b;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0b;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#101012;border:1px solid rgba(255,255,255,0.08);border-radius:24px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

            <!-- ember header bar -->
            <tr>
              <td style="height:6px;background:linear-gradient(90deg,#ffb347 0%,#ff6a3d 50%,#ff3d77 100%);font-size:0;line-height:0;">&nbsp;</td>
            </tr>

            <!-- brand -->
            <tr>
              <td style="padding:36px 40px 8px 40px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-right:10px;">
                      <div style="width:12px;height:12px;border-radius:50%;background:linear-gradient(135deg,#ffb347,#ff3d77);box-shadow:0 0 12px rgba(255,106,61,0.8);"></div>
                    </td>
                    <td>
                      <span style="font-size:22px;font-weight:700;letter-spacing:-0.5px;color:#ffffff;">FORGE<span style="color:#ff6a3d;">LAB</span><sup style="color:#ff6a3d;font-size:11px;">&deg;</sup></span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- body -->
            <tr>
              <td style="padding:20px 40px 8px 40px;">
                <h1 style="margin:0 0 16px 0;font-size:30px;line-height:1.1;font-weight:800;letter-spacing:-1px;color:#ffffff;">
                  Thanks for reaching out, ${safeName}.
                </h1>
                <p style="margin:0 0 16px 0;font-size:16px;line-height:1.65;color:#94a3b8;">
                  We've received your message and it's landed straight with our team.
                  <strong style="color:#e2e8f0;">We'll connect with you soon.</strong>
                </p>
                <p style="margin:0 0 28px 0;font-size:16px;line-height:1.65;color:#94a3b8;">
                  In the meantime, we're already firing up the forge — premium web,
                  mobile, desktop &amp; AI products, engineered for scale.
                </p>
              </td>
            </tr>

            <!-- divider -->
            <tr>
              <td style="padding:0 40px;">
                <div style="height:1px;background:rgba(255,255,255,0.08);"></div>
              </td>
            </tr>

            <!-- footer -->
            <tr>
              <td style="padding:24px 40px 36px 40px;">
                <p style="margin:0 0 4px 0;font-size:14px;font-weight:700;color:#ffffff;">Team FORGELAB</p>
                <p style="margin:0;font-size:13px;line-height:1.6;color:#64748b;">
                  We forge premium digital experiences.
                </p>
              </td>
            </tr>

          </table>
          <p style="max-width:560px;margin:18px auto 0 auto;font-size:11px;color:#475569;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;text-align:center;">
            This is an automated acknowledgement from FORGELAB. No need to reply.
          </p>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
