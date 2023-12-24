import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITasks } from "../../models/ITasks";

interface TaskState {
    todoTasks: ITasks[],
    compledTasks: ITasks[],
    isTaskLoad: boolean,
    isLoading: boolean,
    currentTaskId: number
}


const initialState: TaskState = {
    compledTasks: [],
    todoTasks: [],
    isLoading: true,
    isTaskLoad: false,
    currentTaskId: 0
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

        taskLoading(state) {
            state.isTaskLoad = true;
        },

        taskSuccess(state) {
            state.isTaskLoad = false;
            state.currentTaskId = 0;
        },

        fetchSuccess(state) {
            state.isLoading = false;

        },
        setCurrentTask(state, action: PayloadAction<number>) {
            state.currentTaskId = action.payload;
        },
        editTodoTask(state, action: PayloadAction<ITasks>) {
            state.todoTasks = state.todoTasks.map(task =>
                task.id === action.payload.id ? { ...task, text: action.payload.text } : task
            );
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
    taskLoading, 
    taskSuccess,
    fetchSuccess,
    setCurrentTask
} = taskReducer.actions

export default taskReducer.reducer;