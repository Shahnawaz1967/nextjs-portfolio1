// app/api/contact/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("portfolio");

    const collection = db.collection("contacts");

    await collection.insertOne({ name, email, message, createdAt: new Date() });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
