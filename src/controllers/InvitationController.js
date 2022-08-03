import InvitationModel from "../models/InvitationModel.js";

class InvitationController {

    getInvitation = (req, res) => {
        InvitationModel.sendInvite(req.query.teamId, req.query.userId, req.session.user.id).then(() => {
            return res.redirect("/dashboard");
        });
    };
}

export default new InvitationController;
