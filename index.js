import bodyParser from "body-parser";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import http from "http";
import routes from "./src/routes/index.js";

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressEjsLayouts);
app.set("layout extractScripts", true);

app.use(express.static("public"));
app.use("/", routes);

app.set("view engine", "ejs");
app.set("views", "src/views");

server.listen(3000, () => {
    console.log("listening on *:3000");
});
