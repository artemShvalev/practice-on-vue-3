<template>
<the-nav-bar/>
<router-view/>
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
