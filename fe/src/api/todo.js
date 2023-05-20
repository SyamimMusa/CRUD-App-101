import axios from 'axios';

const baseURL = 'http://localhost:4000/'

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    withCredentials: false,
  },
});

const getList = async () => {
    const res = await apiClient.get('/home',{});
    return res;
}

export {
    getList,
}
