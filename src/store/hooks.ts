import { TypedUseSelectorHook } from "react-redux"
import { RootState } from "./store"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { actions } from "./reducer/actions"


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}