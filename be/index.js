const fs = require("fs").promises;



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


/* 

Alternative to writing your express backend without an architecture

*/




app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get("/homeWA", async (req,res) => {

    let result;
    let message;

    const dataFromDb = await fs.readFile(`./services/home.json`, "utf8");

    if(dataFromDb) {
        result = {
            data: JSON.parse(dataFromDb)
        }

        res.send(result.data);

    } else {
        message = "There's no data in database"

        res.send(message);
    }

 


    
})

/* 

Alternative to writing your express backend without an architecture

*/



