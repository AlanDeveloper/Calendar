class TeamRepository {
    constructor(rep, pgp) {
        this.rep = rep;
        this.pgp = pgp;
    }

    add(obj) {
        return this.rep.one(`INSERT INTO teams(name, description, "boosId") VALUES('${obj.name}', '${obj.description}', ${obj.boosId}) RETURNING id`, a => a.id);
    }

    listAll() {
        return this.rep.many("SELECT * FROM teams");
    }

    myTeams(userId) {
        return this.rep.many(`SELECT * FROM teams INNER JOIN participants ON participants."teamId" = teams.id WHERE participants."userId" = ${userId}`);
    }

    delete(teamId) {
        return this.rep.none(`DELETE FROM teams WHERE id = ${teamId}`);
    }
}

export default TeamRepository;
