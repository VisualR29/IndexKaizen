import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "./AppServices";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [appApi.reducerPath]: appApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(appApi.middleware)
})

setupListeners(store.dispatch);

export default store;