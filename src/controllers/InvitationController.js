import pgPromise from "pg-promise";
import InvitationModel from "../models/InvitationModel.js";
import ParticipantModel from "../models/ParticipantModel.js";
import UserModel from "../models/UserModel.js";

const QueryResultError = pgPromise.errors.QueryResultError;

class InvitationController {

    getInvitation = (req, res) => {
        InvitationModel.sendInvite(req.query.teamId, req.query.userId, req.session.user.id).then(() => {
            return res.redirect("/dashboard");
        });
    };

    getInvitationsTeam = (req, res) => {
        InvitationModel.getInvites(req.query.teamId).then(invites => {
            return res.render("team/invites", { invites: invites });
        }).catch(err => {
            if (err instanceof QueryResultError) {
                return res.render("team/invites", { invites: [] });
            }
        });
    };

    getApproveInvite = (req, res) => {
        InvitationModel.approve(req.query.inviteId).then(user => {
            ParticipantModel.create({ userId: user.userId, teamId: req.query.teamId }).then(() => {
                return res.redirect("/team/invite/list?teamId=" + req.query.teamId);
            });
        });
    };

    getRejectInvite = (req, res) => {
        InvitationModel.reject(req.query.inviteId).then(() => {
            return res.redirect("/team/invite/list?teamId=" + req.query.teamId);
        });
    };

    getCancelInvite = (req, res) => {
        InvitationModel.cancel(req.query.inviteId).then(() => {
            return res.redirect("/team/invite/list?teamId=" + req.query.teamId);
        });
    };

    getInvitationUsers = (req, res) => {
        UserModel.listNoParticipants(req.query.teamId).then(users => {
            return res.render("team/usersInvites", { users: users });
        });
    };
}

export default new InvitationController;
