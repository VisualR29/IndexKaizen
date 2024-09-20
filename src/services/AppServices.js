import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import { baseUrl } from "../database/realtimeDataBase";

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }), 
    endpoints: (builder) => ({
        getTickets: builder.query({
            query: () => `tickets.json`,
            transformResponse: (res) => res || [], 
            providesTags: ["Tickets"],
        }),
        postTicket: builder.mutation({
            query: ({ id, ...ticket }) => ({
                url: `tickets/${id}.json`,
                method: "PUT",
                body: ticket,
            }),
            invalidatesTags: ["Tickets"],
        }),
    }),
});

export const { useGetTicketsQuery, usePostTicketMutation } = appApi;