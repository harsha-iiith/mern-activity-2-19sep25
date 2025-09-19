import Note from "../models/noteModel.js";

// GET all notes
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find(); // fetch from MongoDB
    res.status(200).json(notes.map(note => ({
      id: note._id,
      title: note.title,
      content: note.content
    })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// POST create note
export async function createNotes(req, res) {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ error: "Title and content required" });

  try {
    const note = await Note.create({ title, content });
    res.status(201).json({
      id: note._id,
      title: note.title,
      content: note.content
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// PUT update note by id
export async function updateNotes(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || !content)
    return res.status(400).json({ error: "Title and content required" });

  try {
    const note = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true } // return updated document
    );

    if (!note) return res.status(404).json({ error: "Note not found" });

    res.status(200).json({
      id: note._id,
      title: note.title,
      content: note.content
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// DELETE note by id
export async function deleteNotes(req, res) {
  const { id } = req.params;

  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) return res.status(404).json({ error: "Note not found" });

    res.status(200).json({
      id: note._id,
      title: note.title,
      content: note.content
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Optional: reset all notes (for testing)
export async function resetNotes(req, res) {
  try {
    await Note.deleteMany({});
    res.status(200).json({ message: "All notes deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
