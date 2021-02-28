import User from "../models/userModel.js";

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
export { addUser };
