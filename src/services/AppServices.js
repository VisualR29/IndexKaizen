import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "../database/realtimeDataBase";

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        
        getTickets: builder.query({
            query: () => `tickets.json`,
            transformResponse: (res) => {
                if (!res) return [];
                return (res)
            },
            providesTags: ["tickets"],
        }),
        postTicket: builder.mutation({
            query: ({ id, ...ticket }) => ({
                url: `tickets/${id}.json`,
                method: "PUT",
                body: ticket,
            }),
            invalidatesTags: ["tickets"],
        }),
    })
})

export const {
    useGetTicketsQuery,

    usePostTicketMutation
} = appApi;