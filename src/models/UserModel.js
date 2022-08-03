import db from "../config/database.js";

class UserModel {
    listAll = () => {
        return db.users.listAll();
    };

    listNoParticipants = (teamId) => {
        return db.users.listNoParticipants(teamId);
    };
}

export default new UserModel;
