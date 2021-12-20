<template>
  <!-- component -->
  <div class="container">
    <h1 class="my-8 text-center text-4xl" v-if="requests.length === 0">Заявок нет</h1>

    <table class="text-left w-full" v-else>
      <thead class="bg-black flex text-white w-full">
        <tr class="flex w-full mb-4">
          <th class="p-4 w-1/4">#</th>
          <th class="p-4 w-1/4">ФИО</th>
          <th class="p-4 w-1/4">Телефон</th>
          <th class="p-4 w-1/4">Сумма</th>
          <th class="p-4 w-1/4">Статус</th>
          <th class="p-4 w-1/4">Действие</th>
        </tr>
      </thead>
      <tbody
        class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full"
        style="height: 50vh"
      >
        <tr class="flex w-full mb-4">
          <td class="p-4 w-1/4"></td>
          <td class="p-4 w-1/4"></td>
          <td class="p-4 w-1/4"></td>
          <td class="p-4 w-1/4"></td>
          <td class="p-4 w-1/4"></td>
          <td class="p-4 w-1/4"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
  export default defineComponent({
    props: ["requests"]
  })
</script>
