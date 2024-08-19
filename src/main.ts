import { createApp } from "vue";
import "./style.css";
import App from "./app/App.vue";
import { VueTelegramPlugin } from "vue-tg";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(VueTelegramPlugin);
app.mount("#app");
