import { createStore } from "vuex";

export const store = createStore({
    state () {
        return {
            auth: {
                isLoggedIn: false,
                token: "",
                user: {},
            },
            posts: []
        }
    },
    mutations: {
        setToken: (state, token) => {
            state.auth.token = token;
            state.auth.isLoggedIn = !!(token);
        },
        setUser: (state, user) => {
            state.auth.user = user;
        },
        setPosts: (state, posts) => {
            state.posts = posts;
        }
    },
    actions: {
        setToken: ({ commit }, token) => {
            commit("setToken", token)
        },
        setUser: ({ commit }, user) => {
            commit("setUser", user)
        },
        setPosts: async ({ commit }, posts) => {
            commit("setPosts", posts)
        }
    },
    getters: {}
});