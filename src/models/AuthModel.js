import db from "../config/database.js";

class AuthModel {
    create = (obj) => {
        return db.users.add(obj);
    };
}

export default new AuthModel;
