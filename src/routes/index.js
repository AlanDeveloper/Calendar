import express from "express";
import authRoutes from "./authRoutes.js";
import teamRoutes from "./teamRoutes.js";
import isAuthenticated from "../helpers/isAuthenticated.js";
import Controller from "../controllers/Controller.js";

const routes = express.Router();

routes.get("/", function (req, res) {
    return res.render("index");
});

routes.get("/dashboard", isAuthenticated, Controller.index);

routes.use("/", authRoutes);
routes.use("/", teamRoutes);

// NOT FOUND
routes.use(function (req, res) {
    return res.render("404");
});

export default routes;
