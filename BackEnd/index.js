const express = require('express');
const app = express();

app.listen(4000, () => {
    console.log("App is running..");
})

app.get("/", (req,res) => {
    res.send("Hi");
})


const homeRoute = require("./routes/home")
app.use("/home", homeRoute)


