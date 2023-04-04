import express from "express";
import morgan from "morgan";

import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/users.routes";

import { createRoles } from "./libs/initialSetup";
const app = express();
createRoles();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;
