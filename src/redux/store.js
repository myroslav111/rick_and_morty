import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './rtkQuery';
import characterReducer from './charactersSlice';

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    characterReducer: characterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});
