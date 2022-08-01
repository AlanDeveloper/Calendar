import db from "../config/database.js";

class UserModel {
    listAll = () => {
        return db.users.listAll();
    };
}

export default new UserModel;
