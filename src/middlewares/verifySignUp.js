import User from "../models/User";
import { ROLES } from "../models/Role";

export const verifyUser = async (req, res, next) => {
  const { email, username } = req.body;

  const findEmail = await User.findOne({ email });
  if (findEmail) return res.json({ message: "The email is duplicated" });

  const findUsername = await User.findOne({ username });
  if (findUsername) return res.json({ message: "The username is duplicated" });

  next();
};

export const checkRoleExist = async (req, res, next) => {
  const { roles } = req.body;
  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      if (!ROLES.includes(roles[i])) {
        return res.status(403).json({
          message: "The role provided doesnt exists ",
          role: roles[i],
        });
      }
    }
  }
  next();
};
