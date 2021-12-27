<template>
  <span :class="['text-blue-400', className]">{{ text }}</span>
</template>

<script lang="ts">
import { ref, watch, defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
      validator: (value: any) =>
        ["active", "cancelled", "done", "pending"].includes(value),
    },
  },
  setup(props: any) {
    const classMap = {
      active: "text-blue-400",
      cancelled: "text-red-400",
      done: "text-green-400",
      pending: "text-yellow-400",
    };

    const textMap = {
      active: "Активен",
      cancelled: "Отменен",
      done: "завершен",
      pending: "выполняется",
    };

    watch(props, (val:any) => {
      className.value = classMap[val.type];
      text.value = textMap[val.type];
    });

    const className = ref(classMap[props.type]);
    const text = ref(textMap[props.type]);

    return {
      className,
      text,
    };
  },
});
</script>

<style></style>
