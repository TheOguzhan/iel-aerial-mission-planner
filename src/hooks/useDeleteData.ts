import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeData } from "../redux/table data/actions";

export default function useDeleteData() {
    const data = useSelector<RootState, RootState["dataReducer"]["data"]>(
        (state) => state.dataReducer.data
    );
    const dispatch = useDispatch();

    const deleteData = useCallback((passedData: Data): void => {
        dispatch(removeData(passedData))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return [deleteData] as const;
}