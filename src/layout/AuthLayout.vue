<template>
  <AppMessage />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppMessage from "@/components/ui/appMessage.vue";

export default defineComponent({
  components: { AppMessage },

  setup() {
    return {};
  },
});
</script>

<style></style>
