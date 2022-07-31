import db from "../config/database.js";

class TeamModel {
    create = (obj) => {
        return db.teams.add(obj);
    };

    listAll = () => {
        return db.teams.listAll();
    };

    myTeams = (userId) => {
        return db.teams.myTeams(userId);
    };
}

export default new TeamModel;
