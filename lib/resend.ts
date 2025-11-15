import { Resend } from "resend";
import { env } from "./env";

export const resend = new Resend(env.RESEND_API_KEY);

interface ResendEmailResponse {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail({ to, subject, text }: ResendEmailResponse) {
  await resend.emails.send({
    from: "ShifuLMS <onboarding@resend.dev>",
    to,
    subject,
    text,
  });
}
