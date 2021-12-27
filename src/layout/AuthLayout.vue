<template>
  <div class="container">
    <AppMessage />
    <router-view />
  </div>
</template>

<script lang="ts">
import AppMessage from "@/components/ui/appMessage.vue";

export default {
  components: { AppMessage }
};
</script>

<style></style>
