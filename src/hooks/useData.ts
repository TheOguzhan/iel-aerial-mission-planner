import { useState, useCallback } from "react";


export default function useData(dataPassed: Array<Data>) {
    const [data, setData] = useState<Array<Data>>(dataPassed);

    const push = (gotData: Data) => {
        setData([...data, gotData]);
    }

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

    const changeData = useCallback((index: number, gotData: Data): void => {
        setData([...data.slice(0, index), gotData, ...data.slice(index + 1, data.length)])
    }, [data])

    const deleteData = useCallback((index: number): void => {
        let copyData: Array<Data> = Object.assign([], data);
        copyData.splice(index, 1);
        setData(copyData);
        console.log(data);
    }, [data])

    return [data, push, getPath, changeData, deleteData] as const;
}

