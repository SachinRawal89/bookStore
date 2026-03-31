import express, { Router } from "express";
import { getBook, getBookById } from "../contoller/book.controller.js";


const router = express.Router();

router.get("/", getBook);
//gpt
router.get("/:id", getBookById);
//
export default router
