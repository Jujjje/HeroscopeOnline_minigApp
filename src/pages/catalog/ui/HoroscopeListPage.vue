<script setup lang="ts">
import { HoroscopeWidget } from "src/widgets/HoroscopeList";
let mainButton = window.Telegram.WebApp.MainButton;
mainButton.hide();
</script>
<template>
  <div class="mt-10">
    <HoroscopeWidget />
  </div>
</template>
