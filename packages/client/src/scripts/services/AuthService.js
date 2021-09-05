import { Api } from "../server";

export const login = (cred) => {
    return Api().post("/api/auth/login", cred);
};