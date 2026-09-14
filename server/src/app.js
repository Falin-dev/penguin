import "dotenv/config";
import express from "express";
import cors from "cors";
import healthRoutes from "./modules/health/health.routes.js";
import usersRoutes from "./modules/users/user.routes.js";
import authentication from "./modules/auth/auth.routes.js"
import errorHandler from "./middleware/error.middleware.js";
let app = express();
app.use(cors());
app.use(express.json());
app.use("/health",healthRoutes);
app.use("/user",usersRoutes);
app.use("/auth",authentication)
app.use(errorHandler);
export default app;