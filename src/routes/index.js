import express from "express";
import authRoutes from "./authRoutes.js";

function isAuthenticated(req, res, next) {
    if (req.session.user) next();
    else res.redirect("login");
}

function isNotAuthenticated(req, res, next) {
    if (!req.session.user) next();
    else res.redirect("dashboard");
}

const routes = express.Router();

routes.get("/", function (req, res) {
    return res.render("index");
});

routes.get("/dashboard", isAuthenticated, function (req, res) {
    return res.render("dashboard");
});

routes.use("/", isNotAuthenticated, authRoutes);

// NOT FOUND
routes.use(function (req, res) {
    return res.render("404");
});

export default routes;
