import User from "../models/userModel.js";

const checkAuth = async (data) => {
  const { email, password } = data;
  const user = await User.find({ email });
  if (user && (await user.matchPassword(password))) {
    const result = res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
    return { success: true, body: result };
  } else {
    return { message: "Invalid password or email" };
  }
};
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
