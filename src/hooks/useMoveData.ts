import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { upData, downData } from "../redux/table data/actions";

export default function useUpData() {
    const data = useSelector<RootState, RootState["dataReducer"]["data"]>(
        (state) => state.dataReducer.data
    );

    const dispatch = useDispatch();

    const upTheData = useCallback((passedData: Data): void => {
        dispatch(upData(passedData))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    const downTheData = useCallback((passedData: Data): void => {
        dispatch(downData(passedData))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return [upTheData, downTheData] as const;
}