import ScheduleModel from "../models/ScheduleModel.js";

class ScheduleController {
    getSchedule = (req, res) => {
        return res.render("team/schedule");
    };

    postSchedule = (req, res) => {
        ScheduleModel.create(req.body.teamId, req.body.date, req.session.user.id).then(() => {
            return res.redirect("/team/list?userId=" + req.session.user.id);
        });
    };
}

export default new ScheduleController;
