import { defineStore } from "pinia";
import axios, { AxiosError } from "axios";
import { ref } from "vue";
export interface IHoroscope {
  id: number;
  name: string;
  period: string;
  icon: string;
}

export const useHoroscopeStore = defineStore("useHoroscopeStore", () => {
  let isLoading = ref<boolean>(true);
  let data = ref<IHoroscope[] | null>(null);
  let error = ref<AxiosError | null>(null);
  async function fetchData(userLang: "ru" | "en"): Promise<void> {
    const url = `https://6245127ed042f081.mokky.dev/${userLang}Horoscope`;
    await axios
      .get(url)
      .then((response) => {
        data.value = data.value = response.data;
      })
      .catch((e: AxiosError) => {
        error.value = e;
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  return { fetchData, isLoading, data, error };
});
