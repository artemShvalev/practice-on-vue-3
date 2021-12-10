<template>
<the-nav-bar/>

<div class="container bg-gray-800 w-1/4">Title</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavBar from "@/components/TheNavBar.vue";

export default defineComponent({
  components: { TheNavBar },

  setup() {
    return {};
  },
});
</script>
