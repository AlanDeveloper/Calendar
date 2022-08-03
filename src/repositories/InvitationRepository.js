class InvitationRepository {
    constructor(rep, pgp) {
        this.rep = rep;
        this.pgp = pgp;
    }

    sendInvite(teamId, userId, createdBy) {
        return this.rep.none(`INSERT INTO invitations("teamId", "userId","createdBy") VALUES (${teamId}, ${userId}, ${createdBy})`);
    }

    getInvites(teamId) {
        return this.rep.many(`SELECT invitations.*, users.name AS name FROM invitations INNER JOIN users ON users.id = invitations."userId" WHERE "teamId" = ${teamId} AND invitations.status IS NULL`);
    }

    approve(inviteId) {
        return this.rep.one(`UPDATE invitations SET status = true WHERE id = ${inviteId} RETURNING "userId"`);
    }

    reject(inviteId) {
        return this.rep.none(`UPDATE invitations SET status = false WHERE id = ${inviteId}`);
    }

    cancel(inviteId) {
        return this.rep.none(`DELETE FROM invitations WHERE id = ${inviteId}`);
    }
}

export default InvitationRepository;
