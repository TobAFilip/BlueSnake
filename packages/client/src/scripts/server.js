import axios from "axios";

const BASE_URL = "http://localhost:4000";


export const Api = () => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: ""
        },
    })
}