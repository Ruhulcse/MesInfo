import User from "../models/userModel.js";

const addUser = async (data) => {
  const { name, email, isAdmin, password } = data;
  try {
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
