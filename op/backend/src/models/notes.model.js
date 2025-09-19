import mongoose, { Schema } from "mongoose";

const NotesSchema = new Schema({
  id: String,
  title: String,
  content: String,
});

export default mongoose.model("Notes", NotesSchema);

