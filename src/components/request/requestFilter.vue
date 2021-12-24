<template>
  <div>
    <input type="text" v-model="name" />
  </div>
  <div>
    <select v-model="status">
      <option disabled selected></option>
      <option value="done">Завершен</option>
      <option value="cancelled">Отменен</option>
      <option value="active">Активен</option>
      <option value="pending">Выполняется</option>
    </select>
  </div>
  <button v-if="isActive" @click="reset">clear!</button>
</template>

<script>
import { ref, watch, computed } from 'vue'
export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_, {emit}){
    const name = ref()
    const status = ref()

    watch([name, status], values => {
      emit("update:modelValue", {
        name: values[0],
        status: values[1]
      })
    });
    
    const isActive = computed(() => name.value || status.value)
    

    return { 
      name,
      status,
      isActive,
      reset: () => {
        name.value = '',
        status.value = null
      }
    }




  }
};
</script>

<style></style>
