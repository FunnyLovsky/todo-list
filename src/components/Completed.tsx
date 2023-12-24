import { useAppSelector } from "../store/hooks";
import Task from "./Task";

const Completed = () => {
    const {compledTasks} = useAppSelector(state => state.taskReducer);
    return(
        <>
            <h3>Completed</h3>
            <ul id="completed-tasks">
                {compledTasks.map(task => (
                    <Task id={task.id} text={task.text} check={true} key={task.id}/>
                ))}
            </ul>
        </>
    )
}

export default Completed;