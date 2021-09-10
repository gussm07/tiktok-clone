import axios from "axios"

const instance = axios.create({
    baseURL: "https://tiktok-backendgsm.herokuapp.com/",
});

export default instance;