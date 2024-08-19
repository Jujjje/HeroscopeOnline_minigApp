import { defineStore } from "pinia";
import { ref } from "vue";
import { useWebApp } from "vue-tg";
const { initDataUnsafe } = useWebApp();

export const useUserStore = defineStore("user", () => {
  const userLang = ref<"ru" | "en">(
    initDataUnsafe.user?.language_code == "ru" ? "ru" : "en"
  );

  function setLanguage(lang: "ru" | "en") {
    userLang.value = lang;
  }
  return { setLanguage, userLang };
});
