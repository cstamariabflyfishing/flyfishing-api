import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

export const signUp = async (req, res) => {
  const { body } = req;

  const { username, password, email, roles } = body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });

    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const createdUser = await newUser.save();

  const token = jwt.sign({ id: createdUser._id }, config.SECRET_JWT, {
    expiresIn: 86400,
  });

  res.json({ token, user: createdUser });
};

export const signIn = async (req, res) => {
  const { body } = req;
  const { email, password } = body;

  const user = await User.findOne({ email }).populate("roles");

  if (!user) return res.json({ message: "User not found" });

  const comparePassword = await User.comparePassword(password, user.password);

  if (!comparePassword)
    return res.json({ message: "The password is incorrect" });

  const token = jwt.sign({ id: user._id }, config.SECRET_JWT, {
    expiresIn: 86400,
  });

  return res.json({
    token,
    user,
  });
};
