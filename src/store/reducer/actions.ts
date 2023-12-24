import { AppDispatch } from "../store"
import { addCompledList, addTodoList, removeCompledList, removeTodoList } from "./taskReducer"

const createTask = (text: string) => (dispatch: AppDispatch) => {
    dispatch(addTodoList({text, id: Date.now()}))
}

const deleteTask = (id: number, check: boolean) => (dispatch: AppDispatch) => {
    if(check) {
        dispatch(removeCompledList(id))
    } else {
        dispatch(removeTodoList(id))
    }

}

const moveTask = (id: number, text: string, check: boolean) => (dispatch: AppDispatch) => {
    if(!check) {
        dispatch(addCompledList({text, id}));
        dispatch(removeTodoList(id));
    } else {
        dispatch(addTodoList({text, id}));
        dispatch(removeCompledList(id));
    }

}


export const actions = {
    createTask,
    deleteTask,
    moveTask
}