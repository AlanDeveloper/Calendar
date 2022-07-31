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
            boosId: req.session.user.id
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
        TeamModel.myTeams(req.session.user.id).then(teams => {
            return res.render("team/list", { teams: teams });
        }).catch(err => {
            if (err instanceof QueryResultError) {
                return res.render("team/list", { teams: [] });
            }
        });
    };

    getExit = (req, res) => {
        ParticipantModel.delete(req.query.teamId, req.session.user.id).then(() => {
            return res.redirect("/dashboard");
        });
    };
}

export default new TeamController;
