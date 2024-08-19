<script setup lang="ts">
import { useSwipe } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { router } from "src/app/router";
import { useHoroscopeStore } from "src/entities/horoscope/model/store";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { direction } = useSwipe(document);
let active = ref();

let mainButton = window.Telegram.WebApp.MainButton;
let backButton = window.Telegram.WebApp.BackButton;

backButton.show();
backButton.onClick(() => {
  backButton.hide();
});
window.Telegram.WebApp.onEvent("backButtonClicked", () => {
  router.push("/");
});

mainButton.show();
mainButton.text = "Вернуться назад";
mainButton.textColor = "#000000";
mainButton.color = "#ffffff";
mainButton.onClick(() => {
  router.push("/");
});
watch(direction, () => {
  if (direction.value == "right") router.push("/");
});

const store = useHoroscopeStore();
const { activeHoroscopeForecast, activeHoroscopeName } = storeToRefs(store);
onMounted(() => {
  active.value = route.params.id;
});
</script>

<template>
  <div class="flex flex-col gap-y-4 mt-3">
    <p class="text-center text-[24px] font-bold">{{ activeHoroscopeName }}</p>
    <p>{{ activeHoroscopeForecast }}</p>
  </div>
</template>
