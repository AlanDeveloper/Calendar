import express from "express";
import authRoutes from "./authRoutes.js";
import teamRoutes from "./teamRoutes.js";
import isAuthenticated from "../helpers/isAuthenticated.js";

const routes = express.Router();

routes.get("/", function (req, res) {
    return res.render("index");
});

routes.get("/dashboard", isAuthenticated, function (req, res) {
    return res.render("dashboard");
});

routes.use("/", authRoutes);
routes.use("/", teamRoutes);

// NOT FOUND
routes.use(function (req, res) {
    return res.render("404");
});

export default routes;
