<template>
<MainLayout/>
<AuthLayout/>
</template>

<script lang="ts">
import MainLayout from "./layout/MainLayout.vue";
import AuthLayout from "./layout/AuthLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    MainLayout,
    AuthLayout,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    return {};
  },
});
</script>

