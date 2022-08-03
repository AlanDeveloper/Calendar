import express from "express";
import TeamController from "../controllers/TeamController.js";
import ParticipantController from "../controllers/ParticipantController.js";
import InvitationController from "../controllers/InvitationController.js";
import isAuthenticated from "../helpers/isAuthenticated.js";

const teamRoutes = express.Router();

teamRoutes.get("/team/register", isAuthenticated, TeamController.getRegister);
teamRoutes.post("/team/register", isAuthenticated, TeamController.postRegister);

teamRoutes.get("/team/list", isAuthenticated, TeamController.getYourTeams);

teamRoutes.get("/team/participants", isAuthenticated, ParticipantController.getList);

teamRoutes.get("/team/exit", isAuthenticated, ParticipantController.getExit);

teamRoutes.get("/team/delete", isAuthenticated, TeamController.getDelete);

teamRoutes.get("/team/invite", isAuthenticated, InvitationController.getInvitation);

teamRoutes.get("/team/invite/list", isAuthenticated, InvitationController.getInvitationsTeam);

teamRoutes.get("/team/invite/approve", isAuthenticated, InvitationController.getApproveInvite);
teamRoutes.get("/team/invite/reject", isAuthenticated, InvitationController.getRejectInvite);

export default teamRoutes;
