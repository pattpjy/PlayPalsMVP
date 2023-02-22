const express = require("express");
const app = express();
const port = 3001;
const activitiesData = require("./data.js");

app.use(express.json());

app.locals.activities = activitiesData;

app.get("/", (req, res) => {
    console.log("Welcome to our kids activities database!");
    res.send("Welcome to our kids activities database!");
})
app.get('/api/v1/activities', (req, res) => {
    const stuff = app.locals.activities;
    const something = res.json({stuff});
});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});