import { LocalName, mediator } from "../../service/TaskMediator";
import { AppDispatch } from "../store"
import { 
    addCompledList, 
    addTodoList, 
    removeCompledList, 
    removeTodoList, 
    setCompledList, 
    setTodoList, 
    todoLoading,
    todoSuccess,
    fetchSuccess
} from "./taskReducer"

const fetchTasks = () => async (dispatch: AppDispatch) => {
    const [todo, compled] = await mediator.fetchTasks();
    dispatch(setTodoList(todo))
    dispatch(setCompledList(compled))
    dispatch(fetchSuccess())
}

const createTask = (text: string) => async (dispatch: AppDispatch) => {
    dispatch(todoLoading());
    const task = {text, id: Date.now()}
    dispatch(addTodoList(task));
    await mediator.saveTask(task, LocalName.TODO)
    dispatch(todoSuccess())
}

const deleteTask = (id: number, check: boolean) => async (dispatch: AppDispatch) => {
    dispatch(todoLoading());
    if(check) {
        dispatch(removeCompledList(id))
        await mediator.deleteTask(id, LocalName.COMPLED)
    } else {
        dispatch(removeTodoList(id))
        await mediator.deleteTask(id, LocalName.TODO)
    }
    dispatch(todoSuccess())
}

const moveTask = (id: number, text: string, check: boolean) => async (dispatch: AppDispatch) => {
    const task = {text, id}
    dispatch(todoLoading());

    if(!check) {
        dispatch(addCompledList(task));
        dispatch(removeTodoList(id));
        await mediator.saveTask(task, LocalName.COMPLED)
        await mediator.deleteTask(id, LocalName.TODO)
    } else {

        dispatch(addTodoList(task));
        dispatch(removeCompledList(id));
        await mediator.saveTask(task, LocalName.TODO)
        await mediator.deleteTask(id, LocalName.COMPLED)
    }

    dispatch(todoSuccess())
}


export const actions = {
    createTask,
    deleteTask,
    moveTask,
    fetchTasks
}