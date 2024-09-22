import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import { baseUrl } from "../database/realtimeDataBase";

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }), 
    tagTypes: ["tickets"],
    endpoints: (builder) => ({
        getTickets: builder.query({
            query: () => `tickets.json`,
            transformResponse: (res) => {
                if (!res) return [];
                return Object.keys(res).map(id => ({
                    id,
                    ...res[id]
                }));
            } , 
            providesTags: ["tickets"],
        }),
        postTicket: builder.mutation({
            query: ({ id, newTicket }) => ({
                url: `tickets/${id}.json`,
                method: "PUT",
                body: newTicket,
            })
        })
    }),
});

export const { useGetTicketsQuery, usePostTicketMutation } = appApi;