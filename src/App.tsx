import AddItem from "./components/AddItem";
import Completed from "./components/Completed";
import TodoList from "./components/TodoList";

const App = () => {
    return(
        <div className="container">
            <AddItem/>
            <TodoList/>
            <Completed/>
        </div>
    )
}

export default App;