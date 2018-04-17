const express = require("express");

const app = express();
const port = 3000;

app.get("/", (res, req) => {
    req.send("PomodoroApp");
});

app.listen(port, () => {
    console.log("PomodoroApp listening on port " + port);
});
