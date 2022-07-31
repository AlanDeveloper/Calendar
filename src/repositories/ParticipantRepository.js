class ParticipantRepository {
    constructor(rep, pgp) {
        this.rep = rep;
        this.pgp = pgp;
    }

    add(obj) {
        return this.rep.none(`INSERT INTO participants("userId", "teamId", "createdAt") VALUES('${obj.userId}', '${obj.teamId}', NOW())`);
    }

    listAll(teamId) {
        return this.rep.many(`SELECT * FROM participants INNER JOIN users ON users.id = participants."userId" WHERE "teamId" = ${teamId}`);
    }
}

export default ParticipantRepository;