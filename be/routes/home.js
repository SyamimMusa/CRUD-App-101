const express = require("express");
const router = express.Router();

const {
    getTweets,
    postTweets,
    updateTweets,
    deleteTWeets,
  } = require("../controller/home");

//Middleware
router.use(express.json())
router.use(express.urlencoded({ extended: true }));

router.get("/", getTweets);

router.post("/createTweet", postTweets,);

router.put("/updateTweet", updateTweets);

router.delete("/deleteTweet", deleteTWeets);

module.exports = router