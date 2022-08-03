import pgPromise from "pg-promise";
import TeamModel from "../models/TeamModel.js";
import ParticipantModel from "../models/ParticipantModel.js";

const QueryResultError = pgPromise.errors.QueryResultError;

class TeamController {

    getRegister = (req, res) => {
        return res.render("team/register");
    };

    postRegister = (req, res) => {
        let obj = {
            name: req.body.name,
            description: req.body.description,
            bossId: req.session.user.id
        };

        TeamModel.create(obj).then(result => {
            let obj2 = {
                userId: req.session.user.id,
                teamId: result.id
            };

            ParticipantModel.create(obj2).then(() => {

                return res.redirect("/dashboard");
            });
        }).catch(err => {
            return res.render("team/register", { error: err });
        });
    };


    getYourTeams = (req, res) => {
        TeamModel.myTeams(req.query.userId).then(teams => {
            return res.render("team/list", { teams: teams });
        }).catch(err => {
            if (err instanceof QueryResultError) {
                return res.render("team/list", { teams: [] });
            }
        });
    };

    getDelete = (req, res) => {
        TeamModel.delete(req.query.teamId).then(() => {
            return res.redirect("/team/list?userId=" + req.session.user.id);
        });
    };
}

export default new TeamController;
