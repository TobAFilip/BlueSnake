import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import { store } from "./store/store";

const app = createApp(App);

// Use middleware
app.use(router);
app.use(store);

// Mount app to #app
app.mount("#app");