class UserRepository {
    constructor(rep, pgp) {
        this.rep = rep;
        this.pgp = pgp;
    }

    add(obj) {
        return this.rep.one(`INSERT INTO users(name, email, password) VALUES('${obj.name}', '${obj.email}', MD5('${obj.password}')) RETURNING id`, a => a.id);
    }

    select(obj) {
        return this.rep.one(`SELECT * FROM users WHERE email = '${obj.email}' AND password = MD5('${obj.password}')`);
    }

    listAll() {
        return this.rep.many("SELECT * FROM users");
    }

    remove(id) {
        return this.rep.none("DELETE FROM users WHERE id = $1", id);
    }
}

export default UserRepository;
