import Note from "../models/Note.js";

export const getAllNote = async (req, res) => {
  try {
    const notes = await Note.find();
    // const notes = await Note.find().sort({createdAt : -1})  // returns the  newest data first
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error("Error In GetAllNote Controller");
  }
};

export const getNoteById = async (req, res) => {
  try {
    const notes = await Note.findById(req.params.id);
     if (!notes) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(notes)
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error("Error In GetNoteById Controller");
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savednote = await note.save();
    res.status(201).json(savednote);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error("Error In createNote Controller");
  }
};
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!updateNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error("Error In updateNote Controller");
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note is not delete completely" });
    res.status(200).json({ message: "Note Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error("Error In updateNote Controller");
  }
};
