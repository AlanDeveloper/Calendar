import db from "../config/database.js";

class ParticipantModel {
    create = (obj) => {
        return db.participants.add(obj);
    };
}

export default new ParticipantModel;
