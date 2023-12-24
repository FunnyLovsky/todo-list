import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITasks } from "../../models/ITasks";

interface TaskState {
    todoTasks: ITasks[],
    compledTasks: ITasks[],
    isTodoLoad: boolean,
    isCompledLoad: boolean,
    isLoading: boolean,
}


const initialState: TaskState = {
    compledTasks: [],
    todoTasks: [],
    isCompledLoad: false,
    isLoading: true,
    isTodoLoad: false
}

const taskReducer = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTodoList(state, action: PayloadAction<ITasks>) {
            state.todoTasks.push(action.payload)
        },

        setTodoList(state, action: PayloadAction<ITasks[]>) {
            state.todoTasks = action.payload
        },

        removeTodoList(state, action: PayloadAction<number>) {
            state.todoTasks = state.todoTasks.filter(task => task.id !== action.payload);
        },

        addCompledList(state, action: PayloadAction<ITasks>) {
            state.compledTasks.push(action.payload)
        },

        setCompledList(state, action: PayloadAction<ITasks[]>) {
            state.compledTasks = action.payload
        },

        removeCompledList(state, action: PayloadAction<number>) {
            state.compledTasks = state.compledTasks.filter(task => task.id !== action.payload);
        },

        todoLoading(state) {
            state.isTodoLoad = true;
        },

        todoSuccess(state) {
            state.isTodoLoad = false;
        },

        fetchSuccess(state) {
            state.isLoading = false;
        }
    }
});

export const {
    addCompledList, 
    addTodoList, 
    removeCompledList, 
    removeTodoList, 
    setCompledList, 
    setTodoList, 
    todoLoading, 
    todoSuccess,
    fetchSuccess
} = taskReducer.actions

export default taskReducer.reducer;