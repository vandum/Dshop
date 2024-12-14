import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Warehouse } from '../../interfaces/warehouse';
import { ApiResponse } from '../../interfaces/common';
import { fetchWarehouses } from '../../services/warehouse';
import { AppDispatch } from '..';
export const fetchWarehousesThunk = () => async (dispatch: AppDispatch) => {
  try {
    const response: ApiResponse<Warehouse[]> = await fetchWarehouses();
    // Xử lý thành công, cảnh báo hoặc lỗi ở đây
  } catch (error) {
    console.error('Error fetching warehouses:', error);
  }
};

const warehousesSlice = createSlice({
    name: 'warehouses',
    initialState: [] as Warehouse[],
    reducers: {
      setWarehouses: (state, action: PayloadAction<Warehouse[]>) => {
        return action.payload;
      },
      addWarehouse: (state, action: PayloadAction<Warehouse>) => {
        state.push(action.payload);
      },
      removeWarehouse: (state, action: PayloadAction<string>) => {
        return state.filter((warehouse) => warehouse.id !== action.payload);
      },
      updateWarehouse: (state, action: PayloadAction<Warehouse>) => {
        const index = state.findIndex((warehouse) => warehouse.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      },
    },
  });
  
  export const { setWarehouses, addWarehouse, removeWarehouse, updateWarehouse } = warehousesSlice.actions;
  export default warehousesSlice.reducer;