import pgPromise from "pg-promise";
import ScheduleModel from "../models/ScheduleModel.js";

const QueryResultError = pgPromise.errors.QueryResultError;

class ScheduleController {
    getSchedule = (req, res) => {
        ScheduleModel.getDates(req.query.teamId).then(dates => {
            return res.render("team/schedule", { dates: dates });
        }).catch(err => {
            if (err instanceof QueryResultError) {
                return res.render("team/schedule", { dates: [] });
            }
        });
    };

    postSchedule = (req, res) => {
        ScheduleModel.create(req.body.teamId, req.body.date, req.session.user.id).then(() => {
            return res.redirect("/team/list?userId=" + req.session.user.id);
        }).catch(() => {
            return res.redirect("/team/schedule?teamId=" + req.body.teamId);
        });
    };

    getUserSchedule = (req, res) => {
        ScheduleModel.getUserDates(req.query.userId).then(dates => {
            return res.render("team/userSchedule", { dates: dates });
        }).catch(err => {
            if (err instanceof QueryResultError) {
                return res.render("team/userSchedule", { dates: [] });
            }
        });
    };
}

export default new ScheduleController;
