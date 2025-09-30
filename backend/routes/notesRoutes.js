import { Router } from "express";
import {
  createNote,
  deleteNote,
  getAllNote,
  updateNote,
  getNoteById
} from "../controllers/noteController.js";

const router = Router();

router.get("/", getAllNote);
router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;


