<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="@/assets/img/images.png"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="@/assets/img/p.jpg"
              alt="Workflow"
            />
            <div @click.prevent="openSidebar"> open <i>mdi-open</i></div>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                @click="logout"

                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script lang="ts">
import { Disclosure, DisclosureButton } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { defineComponent } from "vue";

const navigation = [
  { name: "Dashboard", to: "/", current: true },
  { name: "Applications", href: "#", current: false },
  { name: "Help", to: "/help", current: false },
  { name: "Exit", to: "/auth", current: false },
];

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      navigation,
      logout: () => {
        if (navigation[3]) {
          store.commit("auth/logout");
          router.push("/auth");
        } else {
          alert(" You do not exist out is matrix:)");
        }
      },
      openSidebar: () => {
        store.commit('openSidebar')
      }
    };
  },
  components: {
    Disclosure,
    DisclosureButton,
    MenuIcon,
    XIcon,
  },
});
</script>
