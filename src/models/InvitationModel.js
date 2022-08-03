import db from "../config/database.js";

class InvitationModel {
    sendInvite = (teamId, userId, createdBy) => {
        return db.invitations.sendInvite(teamId, userId, createdBy);
    };

    getInvites = (teamId) => {
        return db.invitations.getInvites(teamId);
    };

    approve = (inviteId) => {
        return db.invitations.approve(inviteId);
    };

    reject = (inviteId) => {
        return db.invitations.reject(inviteId);
    };

    cancel = (inviteId) => {
        return db.invitations.cancel(inviteId);
    };
}

export default new InvitationModel;
