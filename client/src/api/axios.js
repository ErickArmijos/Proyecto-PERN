import axios from "axios";


const URL = "http://127.0.0.1:5000/api"

const apiAxios = axios.create({
  baseURL: URL,
})

export default apiAxios;
