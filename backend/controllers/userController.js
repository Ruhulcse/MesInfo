import asyncHandler from "express-async-handler";
import { checkAuth, addUser } from "../services/userService.js";

//authentication check e.i login
const authUser = asyncHandler(async (req, res) => {
  try {
    const authResult = await checkAuth(req.body);
    console.log(authResult);
    return res.send(authResult);
  } catch (error) {
    res.status(500).send(error);
  }
});

// create user controller
const createUser = asyncHandler(async (req, res) => {
  try {
    const createUser = await addUser(req.body);
    return res.send(createUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { authUser, createUser };
