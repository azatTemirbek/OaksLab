import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Fact} from '../Types/Fact';

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://uselessfacts.jsph.pl'}),
  endpoints: builder => ({
    gerRandomFact: builder.query<Fact, void>({
      query: () => '/random.json?language=en',
    }),
  }),
});

export const {useGerRandomFactQuery} = Api;
