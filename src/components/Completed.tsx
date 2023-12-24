import { useAppSelector } from "../store/hooks";
import NotFound from "./NotFound";
import SmallLoader from "./SmallLoader";
import Task from "./Task";

const Completed = () => {
    const {compledTasks} = useAppSelector(state => state.taskReducer);
    return(
        <>
            <h3>
                Completed
                <SmallLoader/>
            </h3>
            
            <ul id="completed-tasks">
                {compledTasks.length > 0 
                    ? 
                    compledTasks.map(task => (
                        <Task id={task.id} text={task.text} check={true} key={task.id}/>
                    ))
                    :
                    <NotFound/>
                }
            </ul>
        </>
    )
}

export default Completed;