import express from "express";
import { config } from "dotenv";
import { connect } from "./DB/connect.js";
config();

const app = express();
const port = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./Public"));
app.listen(port, async () => {
  try {
    await connect();
    console.log(`Server running... ${port}`);
  } catch (error) {
    console.error("Erour server:", error);
  }
});
