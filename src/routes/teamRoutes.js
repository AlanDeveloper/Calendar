import express from "express";
import TeamController from "../controllers/TeamController.js";
import ParticipantController from "../controllers/ParticipantController.js";
import isAuthenticated from "../helpers/isAuthenticated.js";

const teamRoutes = express.Router();

teamRoutes.get("/team/register", isAuthenticated, TeamController.getRegister);
teamRoutes.post("/team/register", isAuthenticated, TeamController.postRegister);

teamRoutes.get("/team/list", isAuthenticated, TeamController.getYourTeams);

teamRoutes.get("/team/participants", isAuthenticated, ParticipantController.getList);

teamRoutes.get("/team/exit", isAuthenticated, TeamController.getExit);

export default teamRoutes;
