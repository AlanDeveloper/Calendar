import pgPromise from "pg-promise";
import ParticipantModel from "../models/ParticipantModel.js";
import TeamModel from "../models/TeamModel.js";

const QueryResultError = pgPromise.errors.QueryResultError;

class ParticipantController {

    getList = (req, res) => {
        ParticipantModel.listAll(req.query.teamId).then(participants => {
            return res.render("team/participants", { participants: participants });
        }).catch(err => {
            if (err instanceof QueryResultError) {
                return res.render("team/participants", { participants: [] });
            }
        });
    };

    getExit = (req, res) => {
        ParticipantModel.delete(req.query.teamId, req.session.user.id).then(() => {
            TeamModel.deleteBoos(req.query.teamId, req.session.user.id).then(() => {
                return res.redirect("/dashboard");
            });
        });
    };

    getInvitation = (req, res) => {
        ParticipantModel.sendInvite(req.query.teamId, req.query.userId, req.session.user.id).then(() => {
            return res.redirect("/dashboard");
        });
    };
}

export default new ParticipantController;
