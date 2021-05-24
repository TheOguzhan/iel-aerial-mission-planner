import {useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData, mutateData } from "../redux/actions";
import { DataState } from "../redux/reducers";

export default function useData() {
    const data = useSelector<DataState, DataState["data"]>(
        (state) => state.data
    );

    const dispatch = useDispatch();

    const push = useCallback((passedData:Data):void => {
        dispatch(addData(passedData))
    },[dispatch]);

    const getPath = useCallback((): Array<Path> => {
        let paths: Path[] = [];

        // eslint-disable-next-line array-callback-return
        data.map((element) => {
            let path: Path = {
                lat: Number(element.lat),
                lng: Number(element.long)
            };
            paths.push(path);
        });
        return paths;
    }, [data]);

    const changeData = useCallback((index: number, passedData: Data): void => {
        dispatch(mutateData(passedData, index));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    //const deleteData = useCallback((index: number): void => {
    //    let copyData: Array<Data> = Object.assign([], data);
    //    console.log(copyData);
    //    copyData.splice(index, 1);
    //    setData(copyData);
    //}, [data])

    return [data, push, getPath, changeData] as const;
}

