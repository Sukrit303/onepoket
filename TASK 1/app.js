// Task 1
const express = require("express");

const app = express();
const port = 3000;
// URL : http://localhost:3000/task1
app.get("/task1", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`listening on port : ${port}`);
});
