import db from "../config/database.js";

class ParticipantModel {
    create = (obj) => {
        return db.participants.add(obj);
    };

    listAll = (teamId) => {
        return db.participants.listAll(teamId);
    };

    delete = (teamId, userId) => {
        return db.participants.delete(teamId, userId);
    };

    sendInvite = (teamId, userId, createdBy) => {
        return db.participants.sendInvite(teamId, userId, createdBy);
    };
}

export default new ParticipantModel;
