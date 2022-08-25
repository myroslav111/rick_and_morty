import { createSlice } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './rtkQuery';

const initialState = {
  characters: [],
  filter: '',
};

export const charactersSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    sortByEpisode: state => {
      state.characters = [
        ...state.characters.sort(
          (character, characterNext) =>
            characterNext.episode.reduce((acc, ep) => {
              return acc + ep.length;
            }, 0) -
            character.episode.reduce((acc, ep) => {
              return acc + ep.length;
            }, 0)
        ),
      ];
    },
    sortByEpisodeDown: state => {
      state.characters = [
        ...state.characters.sort(
          (character, characterNext) =>
            character.episode.reduce((acc, ep) => {
              return acc + ep.length;
            }, 0) -
            characterNext.episode.reduce((acc, ep) => {
              return acc + ep.length;
            }, 0)
        ),
      ];
    },
    sortByDate: state => {
      state.characters = [
        ...state.characters.sort(
          (current, next) =>
            Date.parse(current.created) - Date.parse(next.created)
        ),
      ];
    },
    sortByDateDown: state => {
      state.characters = [
        ...state.characters.sort(
          (current, next) =>
            Date.parse(next.created) - Date.parse(current.created)
        ),
      ];
    },
    filterByName: (state, { payload }) => {
      return { ...state, filter: payload };
    },
    removeCard: (state, { payload }) => {
      state.characters = [
        ...state.characters.filter(character => character.id !== payload),
      ];
    },
    reset: (state, { payload }) => {
      state.characters = [...payload.results];
    },
  },

  extraReducers: builder => {
    builder
      .addMatcher(
        rickAndMortyApi.endpoints.getCharacters.matchFulfilled
        // (state, { payload }) => {
        //   state.characters = [...payload.results];
        // }
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
export const getFilterValue = state => state.characterReducer.filter;
export const nameOfCharacter = state =>
  state.characterReducer.characters.map(name => name.name);
// export const getDataItem = (state) => state.items;
// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  sortByEpisode,
  sortByDate,
  sortByEpisodeDown,
  sortByDateDown,
  filterByName,
  removeCard,
  reset,
} = charactersSlice.actions;

export default charactersSlice.reducer;
