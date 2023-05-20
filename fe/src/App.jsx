import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState(0)

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

  useEffect( () => {
    getList().then((res) =>{ 
      console.log(res)
    })
  }, [])

  return (
    <div>
      lol
    </div>
  )
}

export default App
