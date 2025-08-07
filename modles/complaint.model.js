import { connect } from "../DB/connect.js";

export async function createComplaint(complaintData) {
  const db = await connect();
  const collection = db.collection("complaints");
  const complaint = {
    category: complaintData.category,
    message: complaintData.message,
    createdAt: new Date(),
  };
  return await collection.insertOne(complaint);
}

export async function getAllComplaints() {
  const db = await connect();
  const collection = db.collection("complaints");
  return await collection.find({}).toArray();
}
