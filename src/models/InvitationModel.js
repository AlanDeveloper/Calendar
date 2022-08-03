import db from "../config/database.js";

class InvitationModel {
    sendInvite = (teamId, userId, createdBy) => {
        return db.invitations.sendInvite(teamId, userId, createdBy);
    };
}

export default new InvitationModel;
