import pgPromise from "pg-promise";
import AuthModel from "../models/AuthModel.js";

const QueryResultError = pgPromise.errors.QueryResultError;

class AuthController {

    getLogin = (req, res) => {
        return res.render("auth/login");
    };

    postLogin = (req, res) => {
        let obj = {
            email: req.body.email,
            password: req.body.password
        };

        AuthModel.checkLogin(obj).then(result => {
            req.session.user = { id: result.id, name: result.name };

            return res.redirect("dashboard");
        }).catch(err => {
            if (err instanceof QueryResultError) {
                err = "User not found.";
            }
            return res.render("auth/login", { error: err });
        });
    };

    getRegister = (req, res) => {
        return res.render("auth/register");
    };

    postRegister = (req, res) => {
        let obj = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        };

        AuthModel.create(obj).then(result => {
            req.session.user = { id: result.id, name: obj.name };

            return res.redirect("dashboard");
        }).catch(err => {
            return res.render("auth/register", { error: err });
        });
    };

    logout = async (req, res) => {
        req.session.destroy();

        return res.redirect("/login");
    };
}

export default new AuthController;
