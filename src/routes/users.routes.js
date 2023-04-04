import { Router } from "express";
import * as userCtrl from "../controllers/user.controller";
import { authJwt, verifySignUp } from "../middlewares";
const router = Router();

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignUp.checkRoleExist,
    verifySignUp.verifyUser,
  ],
  userCtrl.createUser
);

export default router;
