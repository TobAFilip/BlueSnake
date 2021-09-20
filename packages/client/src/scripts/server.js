import axios from "axios";
import { store } from "../store/store";

const BASE_URL = "http://localhost:4000";

export const Api = () => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: ` Bearer ${store.state.auth.token}`,
        },
    })
}