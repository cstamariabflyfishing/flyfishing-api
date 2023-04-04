import { Schema, model } from "mongoose";

export const ROLES = ["admin", "user"];

const RoleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Role", RoleSchema);
