import baseApi from "./baseApi";

const tasksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ['Tasks']
        }),
        updateTask: builder.mutation({
            query: ({id, data}) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Tasks']
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: '/tasks',
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ['Tasks']
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Tasks']
        })
    })
});

export const { useAddTaskMutation, useUpdateTaskMutation, useGetTasksQuery, useDeleteTaskMutation } = tasksApi