<template>
  <div v-if="message" class="container mx-auto text-center mt-5">
    <h1 class="text-indigo-700 font-bold text-5xl" :class="[message.type]">This is windows</h1>
    <h3 v-if="title">{{title}}</h3>
    <p class="text-red-500">{{message.value}}</p>
    <button @click="close">&times;</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const titleMap = {
      primary: 'Успешно',
      danger: 'Ошибка',
      warning: 'Внимание'
    }

    const message = computed(() => store.state.message )
    const title = computed(() => message.value ? titleMap[message.value.type] : null)

    return {
      message,
      title,
      close: () => store.commit('clearMessage')
    };
  },
});
</script>
