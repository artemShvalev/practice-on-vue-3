<template>
  <span :class="['text-gray-400', className]">{{text}}</span>
</template>

<script>
import { ref, watch } from "vue";
export default {
props: {
  type: {
    type: String,
    required: true,
    validator(value) {
      return ["active", "cancelled", "done", "pending"].includes(value)
    }
  },
},
setup(props){
  const classMap = {
    active: 'text-blue-400',
    cancelled: 'text-red-400',
    done: 'text-green-400',
    pending: 'text-yellow-400',

  }

  const textMap ={
    active: 'Активен',
    cancelled: 'Отменен',
    done: 'завершен',
    pending: 'выполняется'
  }

  const className = ref(classMap[props.type])
  const text = ref(textMap[props.type])

  watch(props, val => {
    className.value = classMap[val.type]
    text.value = textMap[val.type]
  })



  return{ 
    className,
    text
  }
}

}
</script>

<style>

</style>