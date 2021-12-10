<template>
<component :is="layout + '-layout'" v-if="layout"/>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router"
import MainLayout from '@/layout/MainLayout.vue'
import AuthLayout from '@/layout/AuthLayout.vue'


export default defineComponent({
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  components: { 
    MainLayout,
    AuthLayout
  },
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    };
  },
});
</script>

