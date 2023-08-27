import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {Game, GameFull} from "../types/game";

// initialize an empty api service that we'll inject endpoints into later as needed
export const gameApi = createApi({
    keepUnusedDataFor: 5 * 60 * 1000,
    baseQuery: fetchBaseQuery({baseUrl:'/'}),
    endpoints: (builder) => ({
        getGamesList: builder.query<Game[], SearchParam>({
            query: (params) => ({
                url:  '/games',
                params: {
                    platform: params.platform,
                    category: params.category,
                    'sort-by': params.sortBy,
                }
            })
        }),
        getGame: builder.query<GameFull, string>({
            query: (id) => ({
                url: '/game',
                params: { id }
            })
        })
    }),
    reducerPath: 'gameApi',
})

export interface SearchParam {
    platform?: string,
    category?: string,
    sortBy?: string,
}

export const {useGetGamesListQuery, useGetGameQuery} = gameApi