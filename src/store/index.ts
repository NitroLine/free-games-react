import { configureStore } from "@reduxjs/toolkit"
import {gameApi} from "../api/gameApi";

const store = configureStore({
    reducer: {
        [gameApi.reducerPath]: gameApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gameApi.middleware),
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
