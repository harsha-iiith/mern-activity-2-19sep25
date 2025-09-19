import express from "express";
import {
  createNotes,
  updateNotes,
  deleteNotes,
  getNumberOfNotes,
  getAllNotes,
} from "../controller/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNotes);

router.put("/:id", updateNotes);

router.delete("/:id", deleteNotes);

router.get("/number", getNumberOfNotes);

export default router;
