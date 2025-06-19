"use server";

import nodemailer from "nodemailer";
import ContactInquiryEmail from "@/emails/contact-inquiry-email";
import { render } from "@react-email/components";

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactData) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const businessEmailHtml = await render(
      ContactInquiryEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      }),
    );

    // Email options
    const businessMailOptions = {
      from: `AAU Tours and Travel <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER!,
      subject: `New Contact Inquiry: ${data.subject}`,
      html: businessEmailHtml,
      replyTo: data.email,
    };

    // Send the email
    await transporter.sendMail(businessMailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
