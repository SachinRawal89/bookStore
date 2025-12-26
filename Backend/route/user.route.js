import express from "express";
import { signup, login } from "../contoller/user.controller.js";
const router = express.Router()

router.post("/signup", signup); // post => data ham bhej rahe hai
router.post("/login", login);

export default router;
