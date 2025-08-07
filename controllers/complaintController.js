import {
  createComplaint,
  getAllComplaints,
} from "../modles/complaint.model.js";

export async function submitComplaint(req, res) {
  try {
    const { category, message } = req.body;
    await createComplaint({ category, message });
    res.status(201).json({ message: "created" });
  } catch (error) {
    console.error("eror submit:", error);
  }
}

export async function getComplaints(req, res) {
  try {
    const complaints = await getAllComplaints();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ error: "eror get complaints" });
  }
}

export async function checkAdmin(req, res) {
  const { password } = req.body;

  if (password === process.env.ADMIN_PASSWORD) {
    try {
      const complaints = await getAllComplaints();
      res.json({ success: true, complaints });
    } catch (error) {
      res.status(500).json({ success: false, message: "eror get complaint" });
    }
  } else {
    res.status(403).json({ success: false, message: "not fund" });
  }
}
