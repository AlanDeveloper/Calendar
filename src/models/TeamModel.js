import db from "../config/database.js";

class TeamModel {
    create = (obj) => {
        return db.teams.add(obj);
    };

    listAll = (userId) => {
        return db.teams.listAll(userId);
    };

    myTeams = (userId) => {
        return db.teams.myTeams(userId);
    };

    delete = (teamId) => {
        return db.teams.delete(teamId);
    };

    deleteBoos = (teamId, userId) => {
        return db.teams.deleteBoos(teamId, userId);
    };
}

export default new TeamModel;
