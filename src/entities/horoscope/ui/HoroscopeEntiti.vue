<script setup lang="ts">
import { IHoroscope } from "../model/store";

interface IProps {
  horoscope: IHoroscope;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="size-[170px] flex flex-col items-center gap-y-2">
    <img
      width="100"
      height="100"
      v-bind:src="`https://img.icons8.com/ios/100/FFFFFF/${horoscope.icon}.png`"
      alt="pisces"
    />
    <div class="">
      <p>{{ horoscope.name }}</p>
    </div>

    <p class="text-[12px]">{{ horoscope.period }}</p>
  </div>
</template>
