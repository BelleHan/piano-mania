import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        userName: null,
    }),
    getters: {
        isLoggedIn: (state) => {
            return state.userName != null;
        },
    },
    actions: {
        setUserName(userName) {
            this.userName = userName;
        },

    },
});
