import express from "express";
import authRoutes from "./authRoutes.js";

const routes = express.Router();

routes.get("/", function (req, res) {
    return res.render("index");
});

routes.get("/dashboard", function (req, res) {
    return res.render("dashboard");
});

routes.use("/", authRoutes);

// NOT FOUND
routes.use(function (req, res) {
    return res.render("404");
});

export default routes;
