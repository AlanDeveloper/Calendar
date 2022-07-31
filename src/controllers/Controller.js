import TeamModel from "../models/TeamModel.js";

class Controller {

    index = (req, res) => {
        TeamModel.listAll().then(teams => {
            return res.render("dashboard", { teams: teams });
        });
    };
}

export default new Controller;
