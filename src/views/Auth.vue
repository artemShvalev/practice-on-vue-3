<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="../assets/img/images.png"
          alt="Practice image"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-red-900">
          Sign in to your account
        </h2>
      </div>
    </div>
  </div>

      <form class="mt-8 space-y-6" @submit.prevent="onSubmit">
        <div class="rounded-md shadow-sm-space-y-px">
          <div class="mb-4">
            <label for="value-address" class="sr-only">Email address</label>
            <input
              id="value-address"
              type="email"
              autocomplete="value"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm"
              :class="{ 'border-red-500': eError }"
              placeholder="Email address"
              v-model="email"
              @blur="eBlur"
            />
            <span v-if="eError" class="text-red-500 text-lg">{{ eError }}</span>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              type="password"
              autocomplete="current-password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none sm:text-sm"
              :class="{ 'border-red-500 text-xs': pError }"
              placeholder="Password"
              v-model="password"
              @blur="pBlur"
            />
            <span v-if="pError" class="text-red-500 text-lg">{{ pError }}</span>
          </div>
        </div>

        <div>
          <button
            type="submit"
            
            :disabled="isSubmitting || isTooManyAttempts"
            class="group relative w-full h-7 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            :class="{ 'cursor-not-allowed bg-red-600': isTooManyAttempts }"
          >
          </button>
        </div>
        <span
          class="mx-auto text-center text-green-500"
          v-if="isTooManyAttempts"
        >
          Вы слишком часто пытаетесь войти. Попробуйте позже
        </span>
      </form>
</template>

<script lang="ts">
import { useLoginForm } from "../use/login";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { error } from "@/utils/error";
export default {
  setup() {
    const route = useRoute() as any;
    const store = useStore();

    if (route.query.message) {
      store.dispatch("setMessage", {
        value: error(route.query.message),
        type: "warning",
      });
    }

    return { ...useLoginForm() };
  },
};
</script>
