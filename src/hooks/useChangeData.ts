import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { mutateData } from "../redux/table data/actions";


export default function useChangeData() {
    const data = useSelector<RootState, RootState["dataReducer"]["data"]>(
        (state) => state.dataReducer.data
    );

    const dispatch = useDispatch();

    const changeData = useCallback((index: number, passedData: Data): void => {
        dispatch(mutateData(passedData, index));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])
    return [changeData] as const;
}