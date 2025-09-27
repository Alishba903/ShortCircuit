import clientPromise from "@/lib/mongodb"

export async function POST() {
    const client = await clientPromise;
    const db = client.db("shortcircuit");
    const collection = db.collection("urls");

    // check if the short url exists

  return Response.json({ message: 'Hello World' })
}