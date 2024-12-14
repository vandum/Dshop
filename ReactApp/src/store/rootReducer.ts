import { combineReducers } from '@reduxjs/toolkit';
import warehousesSlice from './slices/warehouses';

const rootReducer = combineReducers({
    warehouse: warehousesSlice,

});

export default rootReducer;