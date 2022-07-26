import express from "express";
import AuthController from "../controllers/AuthController.js";

const authRoutes = express.Router();

authRoutes.get("/login", AuthController.getLogin);
authRoutes.post("/login", AuthController.postLogin);

authRoutes.get("/register", AuthController.getRegister);
authRoutes.post("/register", AuthController.postRegister);

export default authRoutes;
