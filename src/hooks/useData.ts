import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { COMMAND_TYPE_OBJECT_ARRAY } from "../objects/objects";

export default function useData() {
    const data = useSelector<RootState, RootState["dataReducer"]["data"]>(
        (state) => state.dataReducer.data
    );
    const getPath = useCallback((): Array<Path> => {
        let paths: Path[] = [];

        // eslint-disable-next-line array-callback-return
        data.map((element) => {
            // eslint-disable-next-line no-mixed-operators
            if (!COMMAND_TYPE_OBJECT_ARRAY[element.command.toString()].longRequired && !COMMAND_TYPE_OBJECT_ARRAY[element.command.toString()].latRequired || COMMAND_TYPE_OBJECT_ARRAY[element.command.toString()].isolated) {

            } else {
                let path: Path = {
                    lat: Number(element?.lat),
                    lng: Number(element?.long)
                };
                paths.push(path);
            }
        });
        return paths;
    }, [data]);


    return [data, getPath] as const;
}