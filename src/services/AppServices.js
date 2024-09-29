import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realtimeDataBase";

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["tickets"],
    endpoints: (builder) => ({
        getId: builder.query({
            query: () => `ultimo_id.json`,
            transformResponse: (res) => {
                if (!res) return null;
                return res;
            }
        }),
        postId: builder.mutation({
            query: ({ idNumber }) => ({
                url: `ultimo_id.json`,
                method: "PUT",
                body: idNumber,
            }),
            invalidatesTags: ["tickets"],
        }),
        getTickets: builder.query({
            query: () => `tickets.json`,
            transformResponse: (res) => {
                if (!res) return [];
                return Object.keys(res).map(id => ({
                    id,
                    ...res[id]
                }));
            },
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

export const { useGetTicketsQuery, usePostTicketMutation, useGetIdQuery, usePostIdMutation } = appApi;