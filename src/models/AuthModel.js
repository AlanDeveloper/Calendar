import db from "../config/database.js";

class AuthModel {
    create = (obj) => {
        return db.users.add(obj);
    };

    checkLogin = (obj) => {
        return db.users.select(obj);
    };
}

export default new AuthModel;
