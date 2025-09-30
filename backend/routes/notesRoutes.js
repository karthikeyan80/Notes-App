import { Router } from "express";
import {
  createNote,
  deleteNote,
  getNote,
  updateNote,
} from "../controllers/noteController.js";

const router = Router();

router.get("/", getNote);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
