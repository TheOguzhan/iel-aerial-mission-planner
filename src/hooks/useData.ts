import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function useData() {
    const data = useSelector<RootState, RootState["data"]>(
        (state) => { console.log(state); return state.data }
    );
    console.log(data);
    const getPath = useCallback((): Array<Path> => {
        let paths: Path[] = [];

        // eslint-disable-next-line array-callback-return
        data.map((element) => {
            let path: Path = {
                lat: Number(element?.lat),
                lng: Number(element?.long)
            };
            paths.push(path);
        });
        return paths;
    }, [data]);


    return [data, getPath] as const;
}