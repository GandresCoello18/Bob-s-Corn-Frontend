<template>
  <div
    class="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 flex items-center justify-center px-4"
  >
    <div class="text-center max-w-2xl">
      <div class="mb-8">
        <h1 class="text-9xl font-bold text-amber-600 mb-4">404</h1>
        <div class="text-8xl mb-6">🌽</div>
        <h2 class="text-4xl font-bold text-amber-900 mb-4">Page Not Found</h2>
        <p class="text-xl text-amber-700 mb-8">
          Oops! The corn you're looking for has been harvested and moved! 🚜
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <p class="text-gray-600 mb-6">
          The page you're trying to access doesn't exist. Maybe Bob already sold all the corn from
          that page?
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/"
            class="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
          >
            <span>🏠</span>
            <span>Go Home</span>
          </router-link>

          <button
            class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
            @click="goBack"
          >
            <span>⬅️</span>
            <span>Go Back</span>
          </button>
        </div>
      </div>

      <div class="text-sm text-amber-600">
        <p>Error Code: 404 | Lost in the cornfield</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    router.push('/');
  }
};
</script>
