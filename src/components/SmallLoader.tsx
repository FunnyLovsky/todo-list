import { useAppSelector } from "../store/hooks";

const SmallLoader = () => {
    const {isTodoLoad} = useAppSelector(state => state.taskReducer)
    return(
        <span className="loader" style={{opacity: isTodoLoad ? 1 : 0}}></span>
    )
}

export default SmallLoader;