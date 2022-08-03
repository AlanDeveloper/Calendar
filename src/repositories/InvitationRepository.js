class InvitationRepository {
    constructor(rep, pgp) {
        this.rep = rep;
        this.pgp = pgp;
    }

    sendInvite(teamId, userId, createdBy) {
        return this.rep.none(`INSERT INTO invitations("teamId", "userId","createdBy") VALUES (${teamId}, ${userId}, ${createdBy})`);
    }
}

export default InvitationRepository;
