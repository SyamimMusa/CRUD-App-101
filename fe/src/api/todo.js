import axios from "axios";

const baseURL = "http://localhost:4000/home";

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    withCredentials: false,
  },
});

const getPostList = async () => {
  const res = await apiClient.get("/", {});
  return res;
};

const createPost = async (name, tweet) => {
  const res = await apiClient.post("/createTweet", { name, tweet });
  return res;
};

const deletePost = async (postId) => {
  const res = await apiClient.delete("/deleteTweet", { postId });
  console.log(res, postId);
  return res;
};

const updatePost = async (postId, newTweet) => {
  const res = await apiClient.put("/updateTweet", { postId, newTweet });
  return res;
};

export { getPostList, createPost, deletePost, updatePost };
