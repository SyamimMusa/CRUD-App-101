
const fs = require("fs").promises;
const { connection } = require("../config/db.js");

  
const readTweets = async () => {

    const result = await connection();

    const { data } = result;

    return data;
}

const createTweets = async (name, tweet) => {

    let response;

    const result = await connection();



    console.log(result.error);

    if(result.error) {
        //Create a new data object (tweet)
        const postId = 1;

        const newTweetObject = [
            { 
                postId,
                name,
                tweet,
            }
        ]

        await fs.writeFile(`${__dirname}/home.json`, JSON.stringify(newTweetObject));

        response = `Created a post with id of ${postId}`;

        return response

    } else {

        const { data } = result;
        const postId = (data[data.length - 1].postId) + 1;

        const newTweetObject = [
            ...result.data,
            {
            postId,
            name,
            tweet,
            }
        ]

        await fs.writeFile(`${__dirname}/home.json`, JSON.stringify(newTweetObject));

        response = `Created a post with id of ${postId}`;

        return response
    }
}
    

const putTweets = async (postId, newTweet) => {

        let response;

        const result = await connection();

        const { data } = result;

        let selectedTweet = data.find(tweet => tweet.postId === postId);

        if(selectedTweet) {
            selectedTweet.tweet = newTweet
            response = `Updated tweet with ID of ${postId}`
        } else {
            response = `No tweet with ID ${postId} exists `
        }


        await fs.writeFile(`${__dirname}/home.json`, JSON.stringify(data));

  
        return response


    
}
const removeTweets = async (postId) => {

    let response;

    const result = await connection();

    const { data } = result;


    const checkData = data.find((tweet) => tweet.postId == postId)

   

    if(checkData) {
        const newData = data.filter((tweet) => tweet.postId !== postId);
        await fs.writeFile(`${__dirname}/home.json`, JSON.stringify(newData));
        response = `Deleted tweet with ID of ${postId}`
        return response;
    } else {
        response = `No tweet with ID ${postId} exists `
        return response;
    }

    


    
}

module.exports = {
    readTweets,
    createTweets,
    putTweets,
    removeTweets,
  };
  