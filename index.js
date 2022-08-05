import bodyParser from "body-parser";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import http from "http";
import routes from "./src/routes/index.js";

const app = express();
const server = http.createServer(app);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user;
    res.locals.query = req.query;

    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressEjsLayouts);
app.set("layout extractScripts", true);

app.use(express.static("public"));
app.use("/", routes);

app.set("view engine", "ejs");
app.set("views", "src/views");

server.listen(process.env .PORT || 3000, () => {
    console.log("listening on *:" + (process.env.PORT || 3000));
});
