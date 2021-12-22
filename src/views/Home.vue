<template>
  <div>
    <AppPage title="This is table" class="w-full mt-8 text-center">
      <template #header>
        <button class="bg-purple-600 rounded ml-10 text-2xl text-white p-2 hover:bg-purple-500"
        @click="modal = true"
        >Create
        </button>
      </template>
    </AppPage>
    <RequestTable :requests="requests"/>


    <teleport to="body">
      <app-modal v-if="modal" title="Create request" @close="modal = false">
        <request-modal @created="modal = false"/>
      </app-modal>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import RequestTable from '@/components/request/requestTable.vue';
import AppPage from '@/components/ui/AppPage.vue'
import AppModal from '@/components/ui/AppModal.vue'
import RequestModal from '@/components/request/requestModal.vue'
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Home',
  components: {RequestTable, AppPage, AppModal, RequestModal},
  setup(){
    const modal = ref(false);
    const store = useStore()

    const requests = computed(() => store.getters['request/requests'])

    return{ 
      modal,
      requests
    }
  }
});
</script>
