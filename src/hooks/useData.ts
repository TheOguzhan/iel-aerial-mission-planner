import { useState, useCallback } from "react";

export default function useData(dataPassed: Array<Data>) {
    const [data, setData] = useState<Array<Data>>(dataPassed);

    const push = (gotData: Data) => {
        setData([...data, gotData]);
    }
    
    const getPath = useCallback((): Array<Path> => {
        let paths: Path[] = [];

        data.map((element) => {
            let path: Path = {
                lat: Number(element.lat),
                lng: Number(element.long)
            }
            paths.push(path)
        });
        return paths;
    }, [data]);

    return [data, setData, push, getPath] as const;
}

