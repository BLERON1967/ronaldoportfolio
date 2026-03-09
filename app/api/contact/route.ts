import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.re_hDafhShn_NKhZmc8bm6wtjgqduRfzGPH6);

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    try {
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "osaigbovoronaldo@gmail.com",
            subject: "New Portfolio Message",
            html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }
}