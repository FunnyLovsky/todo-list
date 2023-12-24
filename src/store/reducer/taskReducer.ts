import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITasks } from "../../models/ITasks";

interface TaskState {
    todoTasks: ITasks[],
    compledTasks: ITasks[],
}


const initialState: TaskState = {
    compledTasks: [
        {
            id: 2,
            text: 'ssAAA'
        }
    ],
    todoTasks: [        
        {
            id: 1,
            text: 'AAA'
        }
    ]

}

const taskReducer = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTodoList(state, action: PayloadAction<ITasks>) {
            state.todoTasks.push(action.payload)
        },

        removeTodoList(state, action: PayloadAction<number>) {
            state.todoTasks = state.todoTasks.filter(task => task.id !== action.payload);
        },

        addCompledList(state, action: PayloadAction<ITasks>) {
            state.compledTasks.push(action.payload)
        },

        removeCompledList(state, action: PayloadAction<number>) {
            state.compledTasks = state.compledTasks.filter(task => task.id !== action.payload);
        },
    }
});

export const {addCompledList, addTodoList, removeCompledList, removeTodoList} = taskReducer.actions

export default taskReducer.reducer;