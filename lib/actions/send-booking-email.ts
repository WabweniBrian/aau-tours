"use server";

import BookingConfirmationEmail from "@/emails/booking-confirmation-email";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";

interface BookingData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  travelDates: {
    from: Date;
    to: Date;
  };
  specialRequests?: string;
}

export async function sendBookingEmail(data: BookingData) {
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

    // Render the email template
    const emailHtml = await render(
      BookingConfirmationEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        serviceType: data.serviceType,
        travelDates: data.travelDates,
        specialRequests: data.specialRequests,
      }),
    );

    // Email options
    const mailOptions = {
      from: `AAU Tours and Travel <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER!,
      subject: `New Booking Request from ${data.name}`,
      html: emailHtml,
      replyTo: data.email,
    };

    // Send the email
    transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
