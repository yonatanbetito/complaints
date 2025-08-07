import { config } from "dotenv";
import { MongoClient } from "mongodb";
config();

const client = new MongoClient(process.env.DB_CONNECTION);
let db;

export async function connect() {
  if (!db) {
    try {
      await client.connect();
      db = client.db("complaints_db");
      console.log("connected...");
    } catch (error) {
    console.error("Connection failed:", error);
      throw error;
    }
  }
  return db;
}