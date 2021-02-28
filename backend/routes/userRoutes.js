import express from "express";
import { authUser, createUser } from "../controllers/userController.js";
const router = express.Router();

router.route("/").post(createUser);
router.post("/login", authUser);
export default router;
