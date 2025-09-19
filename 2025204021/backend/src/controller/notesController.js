import Notes from "../models/notes.model.js";
import { v4 as uuidv4 } from "uuid";
// GET all notes
export async function getAllNotes(req, res) {
  try {
    const notes = await Notes.find();
    res.status(200).json(notes);
    return;
  } catch (err) {
    res.status(500).json({ error: "Failed to get notes" });
    return;
  }
}

// POST create note
export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      res.status(400).json({ error: "Title and content required" });
      return;
    }

    const id = uuidv4();
    const note = await Notes.create({ id, title, content });
    res.status(201).json(note);
    return;
  } catch (err) {
    res.status(500).json({ error: "Failed to create note" });
    return;
  }
}

// PUT update note by id
export async function updateNotes(req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    if (!id) {
      res.status(400).json({ error: "ID required" });
      return;
    }
    const { title, content } = req.body;
    console.log(title, content);

    if (!title || !content) {
      res.status(400).json({ error: "Title and content required" });
      return;
    }

    const task = await Notes.findOne({ id });

    if (!task) {
      res.status(404).json({ error: "Note not found" });
      return;
    }

    const updatedTask = await Notes.findOneAndUpdate(
      { id },
      { title, content },
      { new: true }
    );
    res.status(200).json(updatedTask);
    return;
  } catch (err) {
    res.status(500).json({ error: "Failed to update note" });
    return;
  }
}

// DELETE note by id
export async function deleteNotes(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ error: "ID required" });
      return;
    }

    const task = await Notes.findOne({ id });
    if (!task) {
      res.status(404).json({ error: "Note not found" });
      return;
    }
    const deletedNote = await Notes.findOneAndDelete({ id });
    res.status(200).json(deletedNote);
    return;
  } catch (err) {
    res.status(500).json({ error: "Failed to delete note" });
    return;
  }
}

// extra route
export async function getNumberOfNotes(req, res) {
  const numberOfNotes = await Notes.countDocuments();
  res.status(200).json({ numberOfNotes });
  return;
}

export async function resetNotes() {
  await Notes.deleteMany({});
  return;
}
