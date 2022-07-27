import AuthModel from "../models/AuthModel.js";

class AuthController {

    getLogin = (req, res) => {
        return res.render("auth/login");
    };

    postLogin = (req, res) => {
        return res.render("auth/login");
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
