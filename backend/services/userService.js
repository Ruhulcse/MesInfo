import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const checkAuth = asyncHandler(async (data) => {
  const { email, password } = data;
  const user = await User.findOne({ email });
  try {
    if (user && (await user.matchPassword(password))) {
      const result = {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      };
      return { success: true, body: result };
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    return { success: false, error: error };
  }
});

const addUser = async (data) => {
  const { name, email, isAdmin, password } = data;
  try {
    // const userexist = await User.find({ email });
    // if (userexist) {
    //   res.status(400);
    //   throw new Error("This email already used");
    // }
    const result = await User.create({
      name,
      email,
      isAdmin,
      password,
    });
    return { success: true, body: result };
  } catch (error) {
    return { success: false, error: error };
  }
};
export { checkAuth, addUser };
