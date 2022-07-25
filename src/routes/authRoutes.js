import express from "express";
import UserController from "../controllers/UserController.js";

const authRoutes = express.Router();

authRoutes.get("/login", UserController.login);

export default authRoutes;
