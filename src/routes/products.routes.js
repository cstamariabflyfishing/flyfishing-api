import { Router } from "express";
import * as productCtrl from "../controllers/products.controller";

import { authJwt } from "../middlewares";

const router = Router();

router.get("/", productCtrl.getProducts);

router.get("/:productId", productCtrl.getProductById);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  productCtrl.createProduct
);

router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productCtrl.editProductById
);

router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productCtrl.deleteProductById
);

export default router;
