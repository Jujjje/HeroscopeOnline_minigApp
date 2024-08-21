<script setup lang="ts">
import { IHoroscope, useHoroscopeStore } from "../model/store";

interface IProps {
  horoscope: IHoroscope;
}

const props = defineProps<IProps>();
const store = useHoroscopeStore();
const { setActiveHoroscope } = store;

function onClickAbout() {
  setActiveHoroscope(props.horoscope.forecast, props.horoscope.name);
}
</script>
<template>
  <RouterLink :to="`/horoscope/${horoscope.icon}`">
    <div
      class="size-[170px] flex flex-col items-center gap-y-2"
      @click="onClickAbout()"
    >
      <img
        width="100"
        height="100"
        v-bind:src="`https://img.icons8.com/ios/100/FFFFFF/${horoscope.icon}.png`"
        alt="pisces"
      />
      <div class="flex items-center gap-x-2">
        <p>{{ horoscope.name }}</p>

        <img
          width="16"
          height="16"
          class="size-[16px]"
          src="https://img.icons8.com/ios/100/FFFFFF/info-squared.png"
          alt="info-squared"
        />
      </div>
      <p class="text-[12px]">{{ horoscope.period }}</p>
    </div>
  </RouterLink>
</template>
