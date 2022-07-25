import pgPromise from "pg-promise";

const pgp = pgPromise({
    connect(client, dc, useCount) {
        const cp = client.connectionParameters;
        console.log("Connected to database:", cp.database);
    },

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
});

export default db;
