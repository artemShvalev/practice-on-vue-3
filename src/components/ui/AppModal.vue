<template>
  <div
    class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-200"
  >
    <div class="bg-red-300 rounded-lg w-1/2">
      <div class="flex flex-col items-start p-4">
        <div class="flex items-center w-full">
          <h3 class="text-gray-900 font-medium text-lg" v-if="title">
            {{ title }}
          </h3>
          <slot />
          <button
            @click.prevent="$emit('close')"
            class="ml-10 w-1/6 bg-gray-500 text-2xl rounded p-3 text-white hover:bg-gray-400"
          >
            close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style></style>
