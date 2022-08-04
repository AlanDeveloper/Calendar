import db from "../config/database.js";

class ScheduleModel {
    create = (teamId, date, createdBy) => {
        return db.schedule.create(teamId, date, createdBy);
    };

    getDates = (teamId) => {
        return db.schedule.getDates(teamId);
    };
}

export default new ScheduleModel;
