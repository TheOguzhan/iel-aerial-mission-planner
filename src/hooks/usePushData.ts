import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/table data/actions";

export default function usePushData() {
    const dispatch = useDispatch();

    const push = useCallback((passedData: Data): void => {
        dispatch(addData(passedData))
    }, [dispatch]);

    return [push] as const;
}