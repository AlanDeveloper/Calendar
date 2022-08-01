import pgPromise from "pg-promise";
import TeamModel from "../models/TeamModel.js";
import UserModel from "../models/UserModel.js";

const QueryResultError = pgPromise.errors.QueryResultError;

class Controller {

    index = (req, res) => {
        TeamModel.listAll().then(teams => {
            UserModel.listAll().then(users => {
                return res.render("dashboard", { teams: teams, users: users });
            });
        }).catch(err => {
            UserModel.listAll().then(users => {
                if (err instanceof QueryResultError) {
                    return res.render("dashboard", { teams: [], users: users });
                }
            });
        });
    };
}

export default new Controller;
