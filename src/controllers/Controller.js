import pgPromise from "pg-promise";
import TeamModel from "../models/TeamModel.js";
import UserModel from "../models/UserModel.js";
import InvitationModel from "../models/InvitationModel.js";

const QueryResultError = pgPromise.errors.QueryResultError;

class Controller {

    index = (req, res) => {
        TeamModel.listAll(req.session.user.id).then(teams => {
            UserModel.listAll().then(users => {
                InvitationModel.myInvites(req.session.user.id).then(invites => {
                    return res.render("dashboard", { teams: teams, users: users, invites: invites });
                }).catch(err => {
                    if (err instanceof QueryResultError) {
                        return res.render("dashboard", { teams: [], users: users, invites: [] });
                    }
                });
            });
        }).catch(err => {
            UserModel.listAll().then(users => {
                if (err instanceof QueryResultError) {
                    InvitationModel.myInvites(req.session.user.id).then(invites => {
                        return res.render("dashboard", { teams: [], users: users, invites: invites });
                    }).catch(err => {
                        if (err instanceof QueryResultError) {
                            return res.render("dashboard", { teams: [], users: users, invites: [] });
                        }
                    });
                }
            });
        });
    };
}

export default new Controller;
