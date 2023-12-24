import { LocalName, mediator } from "../../service/TaskMediator";
import { AppDispatch } from "../store"
import { 
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
} from "./taskReducer"

const fetchTasks = () => async (dispatch: AppDispatch) => {
    const [todo, compled] = await mediator.fetchTasks();
    dispatch(setTodoList(todo))
    dispatch(setCompledList(compled))
    dispatch(fetchSuccess())
}

const createTask = (text: string) => async (dispatch: AppDispatch) => {
    dispatch(taskLoading());

    const task = {text, id: Date.now()}

    dispatch(setCurrentTask(task.id))
    dispatch(addTodoList(task));

    await mediator.saveTask(task, LocalName.TODO)
    dispatch(taskSuccess())
}

const deleteTask = (id: number, check: boolean) => async (dispatch: AppDispatch) => {
    dispatch(taskLoading());
    if(check) {
        dispatch(removeCompledList(id))
        await mediator.deleteTask(id, LocalName.COMPLED)
    } else {
        dispatch(removeTodoList(id))
        await mediator.deleteTask(id, LocalName.TODO)
    }
    dispatch(taskSuccess())
}

const moveTask = (id: number, text: string, check: boolean) => async (dispatch: AppDispatch) => {
    const task = {text, id}
    dispatch(taskLoading());

    if(!check) {
        dispatch(setCurrentTask(id))
        dispatch(addCompledList(task));
        dispatch(removeTodoList(id));
        await mediator.saveTask(task, LocalName.COMPLED)
        await mediator.deleteTask(id, LocalName.TODO)
    } else {
        dispatch(setCurrentTask(id))
        dispatch(addTodoList(task));
        dispatch(removeCompledList(id));
        await mediator.saveTask(task, LocalName.TODO)
        await mediator.deleteTask(id, LocalName.COMPLED)
    }

    dispatch(taskSuccess())
}


export const actions = {
    createTask,
    deleteTask,
    moveTask,
    fetchTasks
}