<template>
  <div class="container card" @click="isOpen = !isOpen">
    <div class="card-title">
      {{ question.title }}
    </div>
    <div class="question-body" v-if="isOpen">
      {{ question.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "QuestionItem",
  props: ["question"],
  setup() {
    return {
      isOpen: ref(false),
    };
  },
});
</script>
