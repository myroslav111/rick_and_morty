import { createSlice } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './rtkQuery';

const initialState = {
  characters: [],
};

export const charactersSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        rickAndMortyApi.endpoints.getCharacters.matchFulfilled,
        (state, { payload }) => {
          state.characters = [...state.characters, ...payload.results];
        }
      )
      .addMatcher(
        rickAndMortyApi.endpoints.getCharactersNextPage.matchFulfilled,
        (state, { payload }) => {
          state.characters = [...state.characters, ...payload.results];
        }
      );
  },
});

export const getCharacters = state => state.characterReducer.characters;
// export const getDataItem = (state) => state.items;
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  charactersSlice.actions;

export default charactersSlice.reducer;
