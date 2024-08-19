<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHoroscopeStore } from "src/entities/horoscope/model/store";
import { useUserStore } from "src/entities/user";
import { onMounted } from "vue";
import { HoroscopeEntiti } from "src/entities/horoscope";

const horoscopeStore = useHoroscopeStore();
const userStore = useUserStore();
const { userLang } = storeToRefs(userStore);
const { fetchData } = horoscopeStore;
const { data } = storeToRefs(horoscopeStore);
onMounted(() => {
  fetchData(userLang.value);
});
</script>
<template>
  <div class="flex flex-wrap justify-between gap-y-10">
    <HoroscopeEntiti :horoscope="horoscope" v-for="horoscope in data" />
  </div>
</template>
