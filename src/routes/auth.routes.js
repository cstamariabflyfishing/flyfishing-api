import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
import { authJwt, verifySignUp } from "../middlewares";

const router = Router();

router.post("/signin", authCtrl.signIn);
router.post(
  "/signup",
  [verifySignUp.verifyUser, verifySignUp.checkRoleExist],
  authCtrl.signUp
);

export default router;
