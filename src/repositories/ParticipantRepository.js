class ParticipantRepository {
    constructor(rep, pgp) {
        this.rep = rep;
        this.pgp = pgp;
    }

    add(obj) {
        return this.rep.none(`INSERT INTO participants("userId", "teamId", "createdAt") VALUES('${obj.userId}', '${obj.teamId}', NOW())`);
    }

    listAll(teamId) {
        return this.rep.many(`SELECT *, users.id AS "userId" FROM participants INNER JOIN users ON users.id = participants."userId" WHERE "teamId" = ${teamId}`);
    }

    delete(teamId, userId) {
        return this.rep.none(`DELETE FROM participants WHERE "userId" = ${userId} AND "teamId" = ${teamId}`);
    }

    sendInvite(teamId, userId, createdBy) {
        return this.rep.none(`INSERT INTO invitations("teamId", "userId","createdBy") VALUES (${teamId}, ${userId}, ${createdBy})`);
    }
}

export default ParticipantRepository;
