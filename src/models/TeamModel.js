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

    delete = (teamId) => {
        return db.teams.delete(teamId);
    };
}

export default new TeamModel;
