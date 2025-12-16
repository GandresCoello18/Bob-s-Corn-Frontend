import { onBeforeUnmount, ref } from 'vue';

import {
  getPurchases,
  purchaseCorn,
  type GetPurchasesResponse,
  type Purchase,
} from '@/services/api';

export function usePurchase() {
  const isLoading = ref(false);
  const isLoadingPurchases = ref(false);
  const message = ref('');
  const messageClass = ref('');
  const purchases = ref<Purchase[]>([]);
  let refreshTimeoutId: ReturnType<typeof setTimeout> | null = null;

  const clearRefreshTimeout = () => {
    if (refreshTimeoutId) {
      clearTimeout(refreshTimeoutId);
      refreshTimeoutId = null;
    }
  };

  const handlePurchase = async () => {
    isLoading.value = true;
    message.value = '';
    clearRefreshTimeout();

    try {
      const result = await purchaseCorn();
      message.value = result.message;
      messageClass.value = 'bg-green-100 text-green-800';

      refreshTimeoutId = setTimeout(() => {
        loadPurchases();
        refreshTimeoutId = null;
      }, 500);
    } catch (error: unknown) {
      const axiosError = error as {
        response?: { status?: number; data?: { error?: { message?: string } } };
      };
      const statusCode = axiosError?.response?.status;
      const errorMessage = axiosError?.response?.data?.error?.message || 'Failed to purchase corn';

      message.value = errorMessage;
      messageClass.value = 'bg-red-100 text-red-800';

      if (statusCode === 429) {
        refreshTimeoutId = setTimeout(() => {
          loadPurchases();
          refreshTimeoutId = null;
        }, 3000);
      }
    } finally {
      isLoading.value = false;
    }
  };

  const loadPurchases = async () => {
    isLoadingPurchases.value = true;
    try {
      const result: GetPurchasesResponse = await getPurchases();
      purchases.value = result.purchases;
    } catch (error) {
      console.error('Failed to load purchases:', error);
    } finally {
      isLoadingPurchases.value = false;
    }
  };

  onBeforeUnmount(() => {
    clearRefreshTimeout();
  });

  return {
    isLoading,
    isLoadingPurchases,
    message,
    messageClass,
    purchases,
    handlePurchase,
    loadPurchases,
  };
}
