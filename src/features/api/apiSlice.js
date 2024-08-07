import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todoApi  = createApi({
    reducerPath:'api',
    tagTypes:['Todos'],
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3500'}),
    endpoints:(builder)=>({
        getTodos: builder.query({
            query: () => ({url:'/todos'}),
            transformResponse:res=>res.sort((a,b)=>b.id < a.id),
            providesTags:['Todos']
        }),
        postTodo: builder.mutation({
            query:(todo) => ({
                url:'/todos',
                method:'POST',
                body:todo
            }),
            invalidatesTags:['Todos']
        }),
        editTodo: builder.mutation({
            query:(todo)=>({
                url:`/todos/${todo.id}`,
                method:'PATCH',
                body:todo
            }),
            invalidatesTags:['Todos']

        }),
        deleteTodo: builder.mutation({
            query:({id})=>({
                url:`/todos/${id}`,
                method:'DELETE',
                body:id
            }),
            invalidatesTags:['Todos']

        }),
    })
})

export const {
    useGetTodosQuery,
    usePostTodoMutation,
    useEditTodoMutation,
    useDeleteTodoMutation,
} = todoApi