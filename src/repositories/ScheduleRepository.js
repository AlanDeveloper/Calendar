class ScheduleRepository {
    constructor(rep, pgp) {
        this.rep = rep;
        this.pgp = pgp;
    }

    create(teamId, date, createdBy) {
        return this.rep.none(`INSERT INTO schedule("teamId", "date","createdBy") VALUES (${teamId}, '${date}', ${createdBy})`);
    }

    getDates(teamId) {
        return this.rep.many(`SELECT * FROM schedule WHERE "teamId" = ${teamId} AND date > NOW() ORDER BY date`);
    }
}

export default ScheduleRepository;
