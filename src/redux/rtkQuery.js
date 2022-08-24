import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: builder => ({
    getCharacters: builder.query({
      query: () => 'character',
    }),
    // getCharactersNextPage: builder.query({
    //   query: page => `?page=${page}`,
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCharactersQuery, useGetCharactersNextPageQuery } =
  rickAndMortyApi;
