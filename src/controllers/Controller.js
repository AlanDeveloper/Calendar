import pgPromise from "pg-promise";
import TeamModel from "../models/TeamModel.js";

const QueryResultError = pgPromise.errors.QueryResultError;

class Controller {

    index = (req, res) => {
        TeamModel.listAll().then(teams => {
            return res.render("dashboard", { teams: teams });
        }).catch(err => {
            if (err instanceof QueryResultError) {
                return res.render("dashboard", { teams: [] });
            }
        });
    };
}

export default new Controller;
