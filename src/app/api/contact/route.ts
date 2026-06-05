import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Configure your email service here
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-password',
  },
});

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Email to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'maqilfahmi20@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>Pesan Baru dari Portfolio Contact</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Confirmation email to sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Terima kasih telah menghubungi saya',
      html: `
        <h2>Halo ${name},</h2>
        <p>Terima kasih telah menghubungi saya melalui portfolio. Saya telah menerima pesan Anda dan akan segera membalas.</p>
        <p>Berikut adalah ringkasan pesan Anda:</p>
        <hr>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Salam,<br>Muhammad Aqil Fahmi</p>
      `,
    });

    return NextResponse.json(
      { message: 'Pesan berhasil terkirim' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Gagal mengirim pesan' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint' },
    { status: 200 }
  );
}
