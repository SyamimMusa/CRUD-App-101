const {
    readTweets,
    createTweets,
    putTweets,
    removeTweets,
  } = require("../services/home");

const getTweets = async (req,res) => {

    const response = await readTweets()

   
    res.send(response);
}

const postTweets = async (req,res) => {

    const { name, tweet } = req.body;
    const response = await createTweets(name,tweet);
   
    res.send(response);
}

const updateTweets = async (req,res) => {

    const { newTweet, postId } = req.body;

    const response = await putTweets(postId, newTweet);

    res.send(response);
}

const deleteTWeets = async (req,res) => {
;
    const { postId } = req.body;

    const response = await removeTweets(postId);

    res.send(response);
    
}

module.exports = {
    getTweets,
    postTweets,
    updateTweets,
    deleteTWeets,
  };
  