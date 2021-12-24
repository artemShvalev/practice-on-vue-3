<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col items-center absolute left-0 right-5">
      <label class="mx-2 text-center mb-2 text-2xl text-gray-700" for="fio">
        ФИО
      </label>
      <input
        class="mb-3 w-4/4 h-10 pl-5 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-violet-300 caret-purple-400"
        :class="{'border-blue-700': fError }"
        type="text"
        id="fio"
        v-model="fio"
        @blur="fBlur"
      />
      <span v-if="fError">{{ fError }}</span>

      <label class="mx-2 text-center mb-2 text-2xl text-gray-700" for="tel">
        Телефон
      </label>
      <input
        class="mb-3 w-4/4 h-10 pl-5 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-violet-300 caret-purple-400"
        :class="{ 'text-red-500': tError }"
        type="text"
        id="tel"
        v-model="tel"
        @blur="tBlur"
      />
      <span v-if="tError">{{ tError }}</span>

      <label class="mx-2 text-center mb-2 text-2xl text-gray-700" for="sum"
        >Сумма Заявки</label
      >
      <input
        class="mb-3 w-4/4 h-10 pl-5 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-violet-300 caret-purple-400"
        :class="{ 'text-red-500': sError }"
        type="number"
        id="sum"
        v-model.number="sum"
        @blur="sBlur"
      />
      <span v-if="sError">{{ sError }}</span>

      <div>
        <label class="text-2xl mb-2" for="status">Статус:</label>
        <select id="status" v-model="status">
          <option value="done">Завершен</option>
          <option value="cancelled">Отменен</option>
          <option value="active">Активен</option>
          <option value="pending">Выполняется</option>
        </select>
      </div>
      <button
        class="w-1/1 bg-green-500 text-2xl rounded p-3 text-white hover:bg-green-400"
        :disabled="isSubmiting"
      >
        Create
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRequestForm } from "../../use/request-form";

export default defineComponent({
  emits: ['created'],
  setup(_, {emit}) {
  const store = useStore()
    const submit = async (values: any) => {
      await store.dispatch('request/create', values)
      emit('created')
    }

    return {
      ...useRequestForm(submit),
    };
  },
});
</script>

<style scoped>
button {
  position: absolute;
  top: 119.5%;
  left: 55%;
}
.invalid{
  color: rgb(251, 255, 0);
  
}
</style>
