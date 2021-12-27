<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-100 py-6"
    v-if="sidebar"
  >
  <div @click="close">&times;</div>

  
    <div class="flex w-full max-w-xs p-4 bg-white">
      <ul class="flex flex-col w-full">
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-400"
            >
            </span>
            <span class="ml-3">Dashboard</span>
            <span
              class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
              >3</span
            >
          </a>
        </li>
        <li class="my-px">
          <span
            class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase"
            >Projects</span
          >
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span class="ml-3">Manager</span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span class="ml-3">Tasks</span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span class="ml-3">Clients</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const sidebar = computed(() => store.state.sidebar);
    return {
      sidebar,
      close: () => store.commit("closeSidebar"),
    };
  },
});
</script>

<style></style>
