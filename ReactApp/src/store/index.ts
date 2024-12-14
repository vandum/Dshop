import { configureStore  } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

export default store;
export type AppDispatch = typeof store.dispatch