import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from "../models/Role";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.json({ message: "No token provided" });

    const decoded = jwt.verify(token, config.SECRET_JWT);

    if (!decoded) {
      return res.json({ message: "Token invalid" });
    } else {
      req.userId = decoded.id;
      next();
    }
  } catch (error) {
    res.json({ error });
  }
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user?.roles || [] } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }

  return res.json({ message: "Required admin role" });
};
