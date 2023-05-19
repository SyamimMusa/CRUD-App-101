const fs = require("fs").promises;

/* 

Simulating a db connection (MySql, MongoDB, whatever you want to use) 

The connection happens in a function that we'll export out to be used in all our services

Every interaction with the database should first have you establish a connection

*/

const connection = async () => {
    const data = await fs.readFile(`./services/home.json`, "utf8");
    if(data) {
        const result = {
            data: JSON.parse(data),
            error: false,
        }
           
        return result;

    } else {
        const result = {
            error: true,
        }
        return result;
    }
    
};

module.exports = {
    connection
}