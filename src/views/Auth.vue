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
      <form class="mt-8 space-y-6" @submit.prevent="onSubmit">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm-space-y-px">
          <div class="mb-4">
            <label for="value-address" class="sr-only">Email address</label>
            <input
              id="value-address"
              name="value"
              type="value"
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
              name="password"
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

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isSubmitting || isTooManyAttempts"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            :class="{ 'cursor-not-allowed bg-red-600': isTooManyAttempts }"
          >
            <span v-if="!isTooManyAttempts">Sign in</span>
            <span v-if="isTooManyAttempts">Wait...</span>
          </button>
        </div>
        <span
          class="mx-auto text-center text-green-500"
          v-if="isTooManyAttempts"
        >
          Вы слишком часто пытаетесь войти. Попробуйте позже
        </span>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useLoginForm } from "../use/login";
export default {
  setup() {
    return { ...useLoginForm() };
  },
};
</script>
