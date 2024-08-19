<script setup lang="ts">
import { HeaderWidget } from "src/widgets/header";
</script>
<template>
  <div class="text-white mx-[5vw] my-4">
    <HeaderWidget />
    <div class="">
      <RouterView />
    </div>
  </div>
</template>
