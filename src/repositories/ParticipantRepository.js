class ParticipantRepository {
    constructor(rep, pgp) {
        this.rep = rep;
        this.pgp = pgp;
    }

    add(obj) {
        return this.rep.none(`INSERT INTO participants("userId", "teamId", "createdAt") VALUES('${obj.userId}', '${obj.teamId}', NOW())`);
    }
}

export default ParticipantRepository;
