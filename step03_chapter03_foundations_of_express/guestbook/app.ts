
import { createServer } from "http";
import { resolve } from "path";
import { urlencoded } from "body-parser";

import * as express from "express";
import * as logger from "morgan";

let app = express();

let entries = [];
app.locals.entries = entries;

app.use(logger("dev"));

app.set("views", resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/new-entry", (req, res) => {
    res.render("new-entry");
});

app.post("/new-entry", (req, res) => {
    if (!req.body.title || !req.body.body) {
        res.status(400).send("Entries must have a title and a body.");
        return;
    }
    entries.push({
        title: req.body.title,
        body: req.body.body,
        published: new Date()
    });
    res.redirect("/");
});

app.use((req, res) => {
    res.status(404).render("404");
});

createServer(app).listen(3000, function () {
    console.log("Guestbook app started on port 3000.");
});
