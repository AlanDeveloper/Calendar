const isNotAuthenticated = (req, res, next) => {
    if (!req.session.user) next();
    else res.redirect("/dashboard");
};

export default isNotAuthenticated;
