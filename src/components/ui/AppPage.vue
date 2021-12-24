<template>
<div v-if="back">
  <router-link to="/">Вернуться к списку заявок</router-link>
</div>
  <div class="container">
    <h1 class="text-3xl">
      {{ title }}
      <slot name="header" />
    </h1>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    back: {
      type: Boolean,
      default: false
    },
  },
  setup(props) {
    document.title = `${props.title} | Other text`;
  },
});
</script>
