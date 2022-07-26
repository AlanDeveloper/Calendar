class UserRepository {
    constructor(rep, pgp) {
        this.rep = rep;
        this.pgp = pgp;
    }

    add(obj) {
        return this.rep.one(`INSERT INTO users(name, email, password) VALUES('${obj.name}', '${obj.email}', MD5('${obj.password}')) RETURNING id`, a => a.id);
    }

    remove(id) {
        return this.rep.none("DELETE FROM users WHERE id = $1", id);
    }
}

export default UserRepository;
