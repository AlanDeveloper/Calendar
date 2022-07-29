import TeamModel from "../models/TeamModel.js";

class TeamController {

    getRegister = (req, res) => {
        return res.render("team/register");
    };

    postRegister = (req, res) => {
        let obj = {
            name: req.body.name,
            description: req.body.description,
            boosId: req.session.user.id
        };

        TeamModel.create(obj).then(() => {

            return res.redirect("/dashboard");
        }).catch(err => {
            return res.render("team/register", { error: err });
        });
    };
}

export default new TeamController;
