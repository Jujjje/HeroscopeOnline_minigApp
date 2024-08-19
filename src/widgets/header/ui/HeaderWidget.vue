<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHoroscopeStore } from "src/entities/horoscope/model/store";
import { useUserStore } from "src/entities/user";
import { RuFlag, UsFlag } from "src/shared/assets";
const text = {
  en: {
    name: "Horoscope online",
    advice: "The most accurate forecasts",
  },
  ru: {
    name: "Гороскопы онлайн",
    advice: "Самые точные прогнозы",
  },
};

const store = useUserStore();
const { setLanguage } = store;
const { userLang } = storeToRefs(store);
const horoscopeStore = useHoroscopeStore();
const { fetchData } = horoscopeStore;
function onCLickFlag(lang: "en" | "ru") {
  setLanguage(lang);
  fetchData(lang);
}
</script>
<template>
  <div class="flex justify-between items-center">
    <div class="">
      <p class="font-bold text-[20px]">{{ text[userLang!].name }}</p>
      <p class="text-[10px]">{{ text[userLang!].advice }}</p>
    </div>
    <div class="">
      <img
        v-bind:src="RuFlag"
        v-if="userLang == 'ru'"
        class="size-6"
        @click="onCLickFlag('en')"
      />
      <img
        v-bind:src="UsFlag"
        v-else
        class="size-6"
        @click="onCLickFlag('ru')"
      />
    </div>
  </div>
</template>
