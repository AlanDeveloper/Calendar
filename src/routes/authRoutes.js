import express from "express";
import AuthController from "../controllers/AuthController.js";
import isNotAuthenticated from "../helpers/isNotAuthenticated.js";
import isAuthenticated from "../helpers/isAuthenticated.js";

const authRoutes = express.Router();

authRoutes.get("/login", isNotAuthenticated, AuthController.getLogin);
authRoutes.post("/login", isNotAuthenticated, AuthController.postLogin);

authRoutes.get("/register", isNotAuthenticated, AuthController.getRegister);
authRoutes.post("/register", isNotAuthenticated, AuthController.postRegister);

authRoutes.get("/logout", isAuthenticated, AuthController.logout);

export default authRoutes;
