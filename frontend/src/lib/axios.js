import axios from "axios" ;

const api = axios.create({
    baseURL : "htt://localhost:5000/api"
})

export default api;