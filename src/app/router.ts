import { createMemoryHistory, createRouter } from "vue-router";

import { HoroscopeListPage } from "src/pages/catalog";
import { HoroscopePage } from "src/pages/horoscope";

const routes = [
  { path: "/", component: HoroscopeListPage },
  { path: "/horoscope/:id", component: HoroscopePage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
