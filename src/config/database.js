import pgPromise from "pg-promise";
import UserRepository from "../repositories/UserRepository.js";
import TeamRepository from "../repositories/TeamRepository.js";
import ParticipantRepository from "../repositories/ParticipantRepository.js";
import InvitationRepository from "../repositories/InvitationRepository.js";
import ScheduleRepository from "../repositories/ScheduleRepository.js";

const pgp = pgPromise({
    // eslint-disable-next-line no-unused-vars
    connect(client, dc, useCount) {
        const cp = client.connectionParameters;
        console.log("Connected to database:", cp.database);
    },

    // eslint-disable-next-line no-unused-vars
    extend(obj, dc) {
        // dc = database context;
        obj.users = new UserRepository(obj, pgp);
        obj.teams = new TeamRepository(obj, pgp);
        obj.participants = new ParticipantRepository(obj, pgp);
        obj.invitations = new InvitationRepository(obj, pgp);
        obj.schedule = new ScheduleRepository(obj, pgp);
        // You can set different repositories based on `dc`
    },

    // eslint-disable-next-line no-unused-vars
    disconnect(client, dc) {
        const cp = client.connectionParameters;
        console.log("Disconnecting from database:", cp.database);
    }
});

const db = pgp({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: process.env.APP_ENV == "production" ? true : false
});

export default db;
