import { useAppSelector } from "../store/hooks";

import NotFound from "./NotFound";
import SmallLoader from "./SmallLoader";
import Task from "./Task";

const TodoList = () => {
    const {todoTasks, } = useAppSelector(state => state.taskReducer);

    return(
        <>
            <h3>
                Todo 
                <SmallLoader/>
            </h3>

            <ul id="incomplete-tasks">

                {todoTasks.length > 0
                    ?
                    todoTasks.map(task => (
                        <Task id={task.id} text={task.text} key={task.id}/>
                    ))
                    :
                    <NotFound/>
                }
            </ul>
        </>

    )
}

export default TodoList;