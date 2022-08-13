import { createApp } from "vue";
import { createPinia } from "pinia";
const t4 = 1;
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
const t = 1;
app.use(createPinia());
app.use(router);
const t2 = 1;

// 832: 挂载应用
app.mount("#app");

const t3 = 1;