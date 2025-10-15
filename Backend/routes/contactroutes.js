// import express from "express";
// import { submitContact } from "../controllers/contactcontrollers.js";

// const router = express.Router();

// router.post("/", submitContact);

// export default router;


// backend/routes/contactRoutes.js
import express from "express";
import {
  addContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../models/contact.js";

const router = express.Router();

// POST: Add new contact
router.post("/", async (req, res) => {
  try {
    const contact = await addContact(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: All contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await getContacts();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Single contact
router.get("/:id", async (req, res) => {
  try {
    const contact = await getContactById(req.params.id);
    if (!contact) return res.status(404).json({ error: "Not found" });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT: Update contact
router.put("/:id", async (req, res) => {
  try {
    const contact = await updateContact(req.params.id, req.body);
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE: Delete contact
router.delete("/:id", async (req, res) => {
  try {
    const result = await deleteContact(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;




















