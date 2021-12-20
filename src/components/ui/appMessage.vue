<template>
  <div v-if="message" class="container mx-auto text-center mt-5">
    <h1 class="text-indigo-700 font-bold text-5xl" :class="[message.type]">This is windows</h1>
    <h3 v-if="title">{{title}}</h3>
    <p class="text-gray-500">{{message.value}}</p>
    <button @click.prevent.once="close">&times;</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();



    const message = computed(() => store.state.message )

    const titleMap = {
      primary: 'Успешно',
      danger: 'Ошибка',
      warning: 'Внимание'
    }

    const title = computed(() => message.value ? titleMap[message.value.type] : null)

    return {
      message,
      title,
      close: () => store.commit('clearMessage')
    };
  },
});
</script>
