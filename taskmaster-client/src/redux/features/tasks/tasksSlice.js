import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        {
            id: 1,
            status: 'pending',
            title: 'Study',
            description: 'Complete every academic works.',
            deadline: '2024-12-12',
            assignedTo: 'Sumiya Islam Mim',
            priority: 'high',
        }
    ],
    userSpecificTasks: [],
}
  
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

        // add task
        addTask: (state, {payload}) => {
            if(state.tasks.length === 0){
                state.tasks.push({ id: 1, status: 'pending', ...payload })
            } else {
                const lastElement = state.tasks.at(-1)
                state.tasks.push({ id: lastElement.id + 1, status: 'pending', ...payload })
            }
        },

        // remove task
        removeTask: (state, {payload}) => {
            state.tasks = state.tasks.filter((item) => item.id !== payload)
        },

        // update status
        updateStatus: (state, {payload}) => {
            const target = state.tasks.find((item) => item.id === payload.id)
            target.status = payload.status
        },

        // user specific task
        userTasks: (state, {payload}) => {
            state.userSpecificTasks = state.tasks.filter((item) => item.assignedTo === payload)
        }
        
    },
})

export const { addTask, removeTask, updateStatus, userTasks } = tasksSlice.actions

export default tasksSlice.reducer
