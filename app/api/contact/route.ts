import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI

export async function POST(request: Request) {
  try {
    if (!uri) {
      throw new Error("MongoDB URI is not defined")
    }

    const client = new MongoClient(uri)
    await client.connect()

    const db = client.db() // Automatically selects the 'portfolio' database
    const collection = db.collection("messages")

    // Parse the incoming request body
    const { email, subject, message } = await request.json()

    if (!email || !subject || !message) {
      return new Response("All fields are required", { status: 400 })
    }

    // Insert the actual user message into the collection
    await collection.insertOne({ email, subject, message, createdAt: new Date() })

    await client.close()

    return new Response("Message sent successfully!", { status: 200 })
  } catch (error) {
    console.error("Error:", error)
    return new Response("Failed to send message.", { status: 500 })
  }
}
