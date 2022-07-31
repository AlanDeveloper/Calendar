import db from "../config/database.js";

class ParticipantModel {
    create = (obj) => {
        return db.participants.add(obj);
    };

    listAll = (teamId) => {
        return db.participants.listAll(teamId);
    };
}

export default new ParticipantModel;
