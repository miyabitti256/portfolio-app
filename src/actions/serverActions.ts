"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

export const sendContactForm = async (formData: z.infer<typeof schema>) => {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
  });

  const data = schema.parse(formData);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: "お問い合わせ",
    text: `名前: ${data.name}\nメールアドレス: ${data.email}\nお問い合わせ内容: ${data.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "お問い合わせを送信しました" };
  } catch (error) {
    console.error("メール送信エラー:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      message: "お問い合わせを送信できませんでした",
    };
  }
};
