import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mutateData } from "../redux/actions";
import { DataState } from "../redux/reducers";

export default function useChangeData() {
    const data = useSelector<DataState, DataState["data"]>(
        (state) => state.data
    );

    const dispatch = useDispatch();

    const changeData = useCallback((index: number, passedData: Data): void => {
        dispatch(mutateData(passedData, index));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])
    return [changeData] as const;
}