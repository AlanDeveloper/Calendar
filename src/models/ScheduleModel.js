import db from "../config/database.js";

class ScheduleModel {
    create = (teamId, date, createdBy) => {
        return db.schedule.create(teamId, date, createdBy);
    };
}

export default new ScheduleModel;
