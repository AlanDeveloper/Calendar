class UserController {

    login = (req, res) => {
        return res.render("login");
    };
}

export default new UserController;
