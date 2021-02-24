import asyncHandler from "express-async-handler";
import { addUser } from "../services/userService.js";

const createUser = asyncHandler(async (req, res) => {
  try {
    const createUser = await addUser(req.body);
    return res.send(createUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { createUser };
