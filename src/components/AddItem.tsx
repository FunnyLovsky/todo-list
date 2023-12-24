import { useState } from "react";
import { useActions } from "../store/hooks";

const AddItem = () => {
    const [value, setValue] = useState<string>('');
    const {createTask} = useActions()

    const addTask = () => {
        createTask(value);
        setValue('');
    }
    
    return(
        <p>
            <label htmlFor="new-task">Add Item</label>
            <input 
                id="new-task" 
                type="text" 
                onChange={(e) => setValue(e.target.value)} 
                value={value}
            />
            <button onClick={addTask}>Add</button>
        </p>
    )
}

export default AddItem;