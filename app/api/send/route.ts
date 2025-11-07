import { error } from "console";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phoneNumber, message } = body;

    if (!name || !email || !phoneNumber || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "Ecolion Homes",
      to: "email",
      subject: `New message from ${name}`,
      html: `
            <h2>New form submission</h2>
            <p>New message from ${name}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> <br/> ${message}</p>
            `,
    });
    if (response.data?.id) {
      return NextResponse.json({ success: true, data: response.data });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to send mail" }, { status: 500 });
  }
}
