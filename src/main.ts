import { createApp } from "vue";
import "./style.css";
import App from "./app/App.vue";
import { VueTelegramPlugin } from "vue-tg";
import { createPinia } from "pinia";
import { router } from "./app/router";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(VueTelegramPlugin);
app.mount("#app");
