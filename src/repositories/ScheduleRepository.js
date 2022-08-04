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

    getUserDates(userId){
        return this.rep.many(`SELECT schedule.*, teams.name FROM schedule INNER JOIN participants ON participants."teamId" = schedule."teamId" INNER JOIN teams ON teams.id = participants."teamId" WHERE schedule.date > NOW() AND participants."userId" = ${userId} ORDER BY schedule.date`);
    }
}

export default ScheduleRepository;
