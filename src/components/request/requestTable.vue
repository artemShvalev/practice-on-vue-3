<template>
  <!-- component -->
  <div class="container">
    <h1 class="my-8 text-center text-4xl" v-if="requests.length === 0">
      Заявок нет
    </h1>

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
        <tr class="flex w-full mb-4" v-for="(r, idx) in requests" :key="r.id">
          <td class="p-4 w-1/4">{{ idx + 1 }}</td>
          <td class="p-4 w-1/4">{{ r.fio }}</td>
          <td class="p-4 w-1/4">{{ r.tel }}</td>
          <td class="p-4 w-1/4">{{currency(r.sum)}}</td>
          <td class="p-4 w-1/4"><app-status :type="r.status"/></td>
          <td class="p-4 w-1/4">
            <router-link
              custom
              :to="{ name: 'Request', params: { id: r.id } }"
              v-slot="{ navigate }"
            >
              <button @click="navigate">open</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { currency } from "@/utils/currency-formatter";
import AppStatus from '@/components/ui/AppStatus.vue'

export default defineComponent({
  props: ["requests"],
  components: {AppStatus},
  setup() {
    return {
      currency,
    };
  },
});
</script>
