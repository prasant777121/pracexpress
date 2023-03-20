// This page is being accessed first every time
const express = require("express");
const port = 8080;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ data: "This is the main page!"});
});


require("./app/routes/main.routes")(app);

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})