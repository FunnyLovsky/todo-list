import { useAppSelector } from "../store/hooks";
import Task from "./Task";

const TodoList = () => {
    const {todoTasks} = useAppSelector(state => state.taskReducer);

    return(
        <>
            <h3>Todo</h3>
            <ul id="incomplete-tasks">
                {todoTasks.map(task => (
                    <Task id={task.id} text={task.text} key={task.id}/>
                ))}
            </ul>
        </>

    )
}

export default TodoList;