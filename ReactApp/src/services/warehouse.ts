import axios, { AxiosResponse } from 'axios';
import { Warehouse } from '../interfaces/warehouse';
import { ApiResponse } from '../interfaces/common';

export const fetchWarehouses = async (): Promise<ApiResponse<Warehouse[]>> => {
  const response: AxiosResponse<ApiResponse<Warehouse[]>> = await axios.get('/api/warehouses');
  return response.data;
};

export const createWarehouse = async (warehouse: Warehouse): Promise<ApiResponse<Warehouse>> => {
  const response: AxiosResponse<ApiResponse<Warehouse>> = await axios.post('/api/warehouses', warehouse);
  return response.data;
};