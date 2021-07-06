import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actionList } from "../redux/table state/actions";

export default function useChangeTableState() {
    const dispatch = useDispatch();
    const changeTableState = useCallback((commandName: string): void => {
        dispatch(actionList[commandName]());
    }, [dispatch]);
    return [changeTableState] as const;
}