/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import AddItem from "./components/AddItem";
import Completed from "./components/Completed";
import TodoList from "./components/TodoList";
import { useActions } from "./store/hooks";

const App = () => {
    const {fetchTasks} = useActions()

    useEffect(() => {
        fetchTasks()
    }, [])
    
    return(
        <div className="container">
            <AddItem/>
            <TodoList/>
            <Completed/>
        </div>
    )
}

export default App;