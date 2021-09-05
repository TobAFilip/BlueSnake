import { createStore } from "vuex"

export const store = createStore({
    state () {
        return {
            isLoggedIn: false,
            token: "",
            user: {}
        }
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token;
            state.isLoggedIn = !!(token);
        },
        setUser: (state, user) => {
            state.user = user;
        }
    },
    actions: {
        setToken: ({ commit }, token) => {
            commit("setToken", token);
        },
        setUser: ({ commit }, user) => {
            commit("setUser", user);
        },
    },
    getters: {
        getLoginState: (state) => {
            return state.isLoggedIn;
        }
    }
});