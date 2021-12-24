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

<script>
import { ref } from "vue";
export default {
  name: "QuestionItem",
  props: ["question"],
  setup() {
      return{ 
          isOpen: ref(false)
      }

  },
};
</script>
