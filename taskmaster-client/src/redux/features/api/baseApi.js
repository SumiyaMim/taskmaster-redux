import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Tasks'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://taskmaster-server-gilt.vercel.app' }),
    endpoints: () => ({
    })
})

export const { useGetTasksQuery, useUpdateTaskMutation, useAddTaskMutation, useDeleteTaskMutation } = baseApi

export default baseApi
