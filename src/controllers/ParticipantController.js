import pgPromise from "pg-promise";
import ParticipantModel from "../models/ParticipantModel.js";

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
            return res.redirect("/dashboard");
        });
    };
}

export default new ParticipantController;
