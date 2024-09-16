import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "../database/realtimeDataBase";

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({

    })
})

// export const {
//     use####Query,
//     use####Mutation
// }