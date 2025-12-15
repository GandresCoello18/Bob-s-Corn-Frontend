import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface PurchaseCornResponse {
  success: boolean;
  message: string;
  timestamp: string;
}

export interface Purchase {
  id: string;
  clientIp: string;
  createdAt: string;
  status: string;
  meta: unknown;
}

export interface GetPurchasesResponse {
  purchases: Purchase[];
  total: number;
  limit: number;
  offset: number;
}

export const purchaseCorn = async (): Promise<PurchaseCornResponse> => {
  const response = await api.post<PurchaseCornResponse>('/purchases');
  return response.data;
};

export const getPurchases = async (limit = 50, offset = 0): Promise<GetPurchasesResponse> => {
  const response = await api.get<GetPurchasesResponse>('/purchases', {
    params: { limit, offset },
  });
  return response.data;
};
