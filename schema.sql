CREATE DATABASE "calendar";

CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255),
    "createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "teams" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "bossId" INT,
    "createdAt" TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY ("bossId") REFERENCES "users"("id")
        ON DELETE SET NULL
);

CREATE TABLE "participants" (
    "userId" INT NOT NULL,
    "teamId" INT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY ("userId") REFERENCES "users"("id")
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY ("teamId") REFERENCES "teams"("id")
        ON UPDATE CASCADE
        ON DELETE CASCADE
);


CREATE TABLE "invitations" (
    "id" SERIAL PRIMARY KEY,
    "status" BOOLEAN DEFAULT NULL,
    "userId" INT NOT NULL,
    "teamId" INT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW(),
    "createdBy" INT NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "users"("id")
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY ("teamId") REFERENCES "teams"("id")
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY ("createdBy") REFERENCES "users"("id")
        ON UPDATE CASCADE
        ON DELETE CASCADE
);
