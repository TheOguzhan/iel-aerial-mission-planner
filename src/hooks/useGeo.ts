import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDistance } from 'geolib';
import { RootState } from "../redux/store";
import { COMMAND_TYPE_OBJECT_ARRAY } from "../objects/objects";

export default function useGeo(passedData: Data) {
    const data = useSelector<RootState, RootState["dataReducer"]["data"]>(
        (state) => state.dataReducer.data
    );
    const passedDataIndex = data.indexOf(passedData);
    const [previousDistance, setPreviousDistance] = useState<number>(0);
    const [nextDistance, setNextDistance] = useState<number>(0);
    const [previousNodePath, setPreviousNodePath] = useState<Array<Path>>([{ lat: Number(passedData.lat), lng: Number(passedData.long) }]);
    const [nextNodePath, setNextNodePath] = useState<Array<Path>>([{ lat: Number(passedData.lat), lng: Number(passedData.long) }]);
    const [airDistanceHome, setAirDistanceHome] = useState<number>(0);
    const [absoluteDistanceHome, setAbsoluteDistanceHome] = useState<number>(0);
    const [previousNode, setPreviousNode] = useState<Data>();
    const [nextNode, setNextNode] = useState<Data>();
    const distanceFromPreviousNode = useCallback(() => {
        if (passedDataIndex <= 0) {
            setPreviousNodePath([{ lat: Number(passedData.lat), lng: Number(passedData.long) }])
            setPreviousDistance(0)
        } else {
            let previousNodes: Array<Data> = data.slice(0, passedDataIndex).reverse();
            // eslint-disable-next-line array-callback-return
            for (var i = 0; i <= previousNodes.length - 1; i++) {
                if ((COMMAND_TYPE_OBJECT_ARRAY[previousNodes[i].command.toString()].longRequired
                    // eslint-disable-next-line no-mixed-operators
                    && COMMAND_TYPE_OBJECT_ARRAY[previousNodes[i].command.toString()].latRequired)
                    // eslint-disable-next-line no-mixed-operators
                ) {

                    setPreviousNode(previousNodes[i]);
                    break;
                } else {
                    setPreviousNodePath([{ lat: Number(passedData.lat), lng: Number(passedData.long) }])
                    setPreviousDistance(0)
                }
            }
            if (previousNode) {
                setPreviousNodePath([{
                    lat: Number(previousNode?.lat),
                    lng: Number(previousNode?.long)
                },
                {
                    lat: Number(passedData?.lat),
                    lng: Number(passedData?.long)
                }]);
                let distanceInMeter: number = getDistance({
                    latitude: Number(previousNode?.lat),
                    longitude: Number(previousNode?.long)
                },
                    {
                        latitude: Number(passedData?.lat),
                        longitude: Number(passedData?.long)
                    })
                setPreviousDistance(distanceInMeter);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const distanceToNextNode = useCallback(() => {
        if (passedDataIndex >= data.length - 1) {
            setNextNodePath([{ lat: Number(passedData.lat), lng: Number(passedData.long) }])
            setNextDistance(0);
        } else {
            let nextNodes: Array<Data> = data.slice(passedDataIndex, data.length);


            for (var i = 1; i < nextNodes.length + 1; i++) {
                if ((COMMAND_TYPE_OBJECT_ARRAY[nextNodes[i].command.toString()].longRequired
                    // eslint-disable-next-line no-mixed-operators
                    && COMMAND_TYPE_OBJECT_ARRAY[nextNodes[i].command.toString()].latRequired)
                    // eslint-disable-next-line no-mixed-operators
                ) {

                    setNextNode(nextNodes[i]);
                    break;
                } else {
                    setNextNodePath([{ lat: Number(passedData.lat), lng: Number(passedData.long) }])
                    setNextDistance(0)
                }
            }

            if (nextNode) {
                setNextNodePath([{
                    lat: Number(nextNode.lat),
                    lng: Number(nextNode.long)
                },
                {
                    lat: Number(passedData.lat),
                    lng: Number(passedData.long)
                }])
                let distanceInMeter: number = getDistance({
                    latitude: Number(nextNode.lat),
                    longitude: Number(nextNode.long)
                },
                    {
                        latitude: Number(passedData.lat),
                        longitude: Number(passedData.long)
                    })
                setNextDistance(distanceInMeter);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);


    const airDistanceToHome = useCallback(() => {
        if (passedDataIndex <= 0) {
            setAirDistanceHome(0);
            setAbsoluteDistanceHome(0);
        }
        else {
            const homeNode: Data = data[0];
            let airDistanceInMeter: number = getDistance({
                lat: +homeNode.lat, lng: +homeNode.long
            }, {
                lat: +passedData.lat, lng: +passedData.long
            });
            setAirDistanceHome(airDistanceInMeter);
            setAbsoluteDistanceHome(+Math.sqrt(Math.pow(+passedData.alt, 2) + Math.pow(airDistanceInMeter, 2)).toFixed(4))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    useEffect(() => {
        distanceFromPreviousNode();
        distanceToNextNode();
        airDistanceToHome();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, passedData]);
    return [previousDistance,
        nextDistance,
        previousNodePath,
        nextNodePath,
        airDistanceHome,
        absoluteDistanceHome] as const;
}