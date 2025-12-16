<template>
  <div class="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
    <div class="container mx-auto px-4 py-8">
      <header class="text-center mb-12">
        <h1 class="text-5xl font-bold text-amber-900 mb-2">🌽 Bob's Corn</h1>
        <p class="text-xl text-amber-700">Fresh corn, just a click away!</p>
      </header>

      <div class="max-w-2xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Buy Corn</h2>
          <p class="text-gray-600 mb-6">
            Bob's policy: Maximum 1 corn per client per minute. Fair and fresh! 🚜
          </p>

          <button
            :disabled="isLoading"
            class="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            @click="handlePurchase"
          >
            <span v-if="isLoading">Processing...</span>
            <span v-else>Buy Corn Now 🌽</span>
          </button>

          <div v-if="message" class="mt-4 p-4 rounded-lg" :class="messageClass">
            <p class="font-medium">{{ message }}</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-semibold text-gray-800">Purchase History</h2>
            <button
              :disabled="isLoadingPurchases"
              class="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              @click="loadPurchases"
            >
              {{ isLoadingPurchases ? 'Loading...' : 'Refresh' }}
            </button>
          </div>

          <div v-if="purchases.length === 0 && !isLoadingPurchases" class="text-center py-8">
            <p class="text-gray-500">No purchases yet. Buy your first corn! 🌽</p>
          </div>

          <div v-else-if="isLoadingPurchases" class="text-center py-8">
            <p class="text-gray-500">Loading purchases...</p>
          </div>

          <div v-else class="space-y-3">
            <div
              v-for="purchase in purchases"
              :key="purchase.id"
              class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div class="flex justify-between items-start">
                <div>
                  <p class="font-semibold text-gray-800">Purchase #{{ purchase.id.slice(0, 8) }}</p>
                  <p class="text-sm text-gray-600">{{ formatDate(purchase.createdAt) }}</p>
                </div>
                <span
                  class="px-3 py-1 rounded-full text-xs font-medium"
                  :class="getStatusClass(purchase.status)"
                >
                  {{ formatStatus(purchase.status) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { usePurchase } from '@/composables/usePurchase';
import { formatDate, formatStatus, getStatusClass } from '@/utils/purchaseUtils';

const {
  isLoading,
  isLoadingPurchases,
  message,
  messageClass,
  purchases,
  handlePurchase,
  loadPurchases,
} = usePurchase();

onMounted(() => {
  loadPurchases();
});
</script>
