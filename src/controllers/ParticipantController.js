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
}

export default new ParticipantController;
