/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import AddItem from "./components/AddItem";
import Completed from "./components/Completed";
import TodoList from "./components/TodoList";
import { useActions, useAppSelector } from "./store/hooks";
import BigLoader from "./components/BigLoader";

const App = () => {
    const {fetchTasks} = useActions();
    const {isLoading} = useAppSelector(state => state.taskReducer)

    useEffect(() => {
        fetchTasks()
    }, [])



    return(
        <div className="container">
            <AddItem/>
            {isLoading 
                ?
                <BigLoader/> 
                :
                <>
                    <TodoList/>
                    <Completed/>
                </>
            }
        </div>
    )
}

export default App;