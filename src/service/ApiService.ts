import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Fact} from '../Types/Fact';

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://corsanywhere.herokuapp.com/https://uselessfacts.jsph.pl/api/v2/",
  }),
  endpoints: builder => ({
    gerRandomFact: builder.query<Fact, void>({
      query: () => 'facts/random',
    }),
  }),
});

export const {useGerRandomFactQuery} = Api;
