<template>
  <div>
    <app-loader v-if="loading"/>
    <AppPage title="Request" class="w-full mt-8 text-center" v-else>
      <template #header>
        <button class="bg-purple-600 rounded ml-10 text-2xl text-white p-2 hover:bg-purple-500"
        @click="modal = true"
        >Create
        </button>
      </template>
    </AppPage>

    <RequestFilter v-model="filter"/>

    <RequestTable :requests="requests"/>


    <teleport to="body">
      <app-modal v-if="modal" title="Create request" @close="modal = false">
        <request-modal @created="modal = false"/>
      </app-modal>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted} from 'vue';
import RequestTable from '@/components/request/requestTable.vue';
import AppPage from '@/components/ui/AppPage.vue'
import AppModal from '@/components/ui/AppModal.vue'
import RequestModal from '@/components/request/requestModal.vue'
import { useStore } from 'vuex';
import AppLoader from '@/components/ui/AppLoader.vue';
import RequestFilter from '@/components/request/requestFilter.vue';

export default defineComponent({
  name: 'Home',

  components: 
  {
  RequestTable,
  RequestFilter,
  AppPage, 
  AppModal, 
  RequestModal, 
  AppLoader,
  },

  setup(){
    const modal = ref(false);
    const store = useStore();
    const loading = ref(false);
    const filter = ref();

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })

    const requests = computed(() => store.getters['request/requests'].filter(request => {
      if(filter.value.name){
        return request.fio.includes(filter.value.name)
      }
      return request
    })
    .filter(request => {
      if(filter.value.status) {
        return filter.value.status === request.status
      }
      return request
    })
    )

    return{ 
      modal,
      requests,
      loading,
      filter
    }
  }
});
</script>
