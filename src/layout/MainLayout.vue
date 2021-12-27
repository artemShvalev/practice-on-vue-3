<template>
  <the-nav-bar />
  <the-side-bar />
  <div class="container mx-auto">
    <app-message />
    <router-view />
  </div>
</template>

<script lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
import TheSideBar from "@/components/TheSideBar.vue";
import AppMessage from "@/components/ui/appMessage.vue";

export default {
  components: { TheNavBar, AppMessage, TheSideBar },
};
</script>
