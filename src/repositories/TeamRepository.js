class TeamRepository {
    constructor(rep, pgp) {
        this.rep = rep;
        this.pgp = pgp;
    }

    add(obj) {
        return this.rep.none(`INSERT INTO teams(name, description, "boosId") VALUES('${obj.name}', '${obj.description}', ${obj.boosId})`);
    }
}

export default TeamRepository;
