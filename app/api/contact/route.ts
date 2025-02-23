import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("portfolio");
    const collection = db.collection("messages");

    await collection.insertOne({
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error: any) {
    console.error("Error in API:", error.message);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
