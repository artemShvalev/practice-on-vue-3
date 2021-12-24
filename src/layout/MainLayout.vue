<template>
  <the-nav-bar />
  <the-side-bar />
  <div class="container mx-auto">
    <app-message />
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavBar from "@/components/TheNavBar.vue";
import TheSideBar from "@/components/TheSideBar.vue";
import AppMessage from "@/components/ui/appMessage.vue";

export default defineComponent({
  components: { TheNavBar, AppMessage, TheSideBar },

  setup() {
    return {};
  },
});
</script>
