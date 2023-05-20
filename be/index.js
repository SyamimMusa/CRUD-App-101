const express = require('express');
var cors = require('cors');

const app = express();

app.listen(4000, () => {
    console.log("App is running..");
})

app.get("/", (req,res) => {
    res.send("Hi");
})


const homeRoute = require("./routes/home")
app.use(cors());
app.use("/home", homeRoute)


