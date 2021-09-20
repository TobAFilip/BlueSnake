import { Api } from "../server";

export const getPosts = () => {
    return Api().get("/api/posts/list-posts");
}