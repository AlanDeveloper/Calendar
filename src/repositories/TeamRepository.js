class TeamRepository {
    constructor(rep, pgp) {
        this.rep = rep;
        this.pgp = pgp;
    }

    add(obj) {
        return this.rep.one(`INSERT INTO teams(name, description, "boosId") VALUES('${obj.name}', '${obj.description}', ${obj.boosId}) RETURNING id`, a => a.id);
    }

    listAll(userId) {
        return this.rep.many(`SELECT *, (CASE WHEN (SELECT COUNT(*) FROM participants WHERE "teamId" = teams.id AND "userId" = ${userId}) > 0 THEN true ELSE (CASE WHEN (SELECT COUNT(*) FROM invitations WHERE "teamId" = teams.id AND "userId" = ${userId}) > 0 THEN true ELSE false END) END) AS participate FROM teams`);
    }

    myTeams(userId) {
        return this.rep.many(`SELECT * FROM teams INNER JOIN participants ON participants."teamId" = teams.id WHERE participants."userId" = ${userId}`);
    }

    delete(teamId) {
        return this.rep.none(`DELETE FROM teams WHERE id = ${teamId}`);
    }
}

export default TeamRepository;
