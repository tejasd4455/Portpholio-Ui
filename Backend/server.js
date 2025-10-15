import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Contact from "./models/contact.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000/", // your frontend port
  methods: ["POST", "GET"],
}));

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ✅ POST route to receive contact form data
app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill in all required fields." });
    }

    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ error: "Server error, please try again." });
  }
});

// ✅ Optional: Check server health
app.get("/", (req, res) => res.send("Server is running! 🚀"));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
