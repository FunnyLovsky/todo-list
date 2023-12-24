import { FC, useState } from "react";
import { useActions } from "../store/hooks";

interface TaskProps {
    text: string,
    id: number,
    check?: boolean
}

const Task: FC<TaskProps> = ({text, check = false, id}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(check)
    const [label, setLabel] = useState<string>(text);
    const {deleteTask, moveTask} = useActions()

    const editHandler = () => {
        if(edit) {
            setLabel(value)
            setEdit(false)
        } else {
            setValue(label)
            setEdit(true);
        }
    }

    const deleteHandler = () => {
        deleteTask(id, check)
    }

    const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        moveTask(id, label, check);
        setChecked(e.target.checked)
    }

    return(
        <li className={edit ? 'editMode' : ''}>
            <input type="checkbox" checked={checked} onChange={checkHandler}/>
            <label>{label}</label>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className="edit" onClick={editHandler}>Edit</button>
            <button className="delete" onClick={deleteHandler}>Delete</button>
        </li>
    )
}

export default Task;