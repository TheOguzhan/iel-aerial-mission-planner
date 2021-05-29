import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeData } from "../redux/actions";
import { DataState } from "../redux/reducers";

export default function useDeleteData() {
    const data = useSelector<DataState, DataState["data"]>(
        (state) => state.data
    );

    const dispatch = useDispatch();

    const deleteData = useCallback((passedData: Data): void => {
        dispatch(removeData(passedData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return [deleteData] as const;
}