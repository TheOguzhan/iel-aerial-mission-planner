import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDistance } from 'geolib';
import { RootState } from "../redux/store";

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
    const distanceFromPreviousNode = useCallback(() => {
        if (passedDataIndex <= 0) {
            setPreviousNodePath([{ lat: Number(passedData.lat), lng: Number(passedData.long) }])
            setPreviousDistance(0)
        } else {
            let previousNode: Data = data[passedDataIndex - 1];
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const distanceToNextNode = useCallback(() => {
        if (passedDataIndex >= data.length - 1) {
            setNextNodePath([{ lat: Number(passedData.lat), lng: Number(passedData.long) }])
            setNextDistance(0);
        } else {
            let nextNode: Data = data[passedDataIndex + 1];
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const airDistanceToHome = useCallback(() => {
        if(passedDataIndex <= 0){
            setAirDistanceHome(0);
            setAbsoluteDistanceHome(0);
        }
        else {
            let homeNode: Data = data[0];
            let airDistanceInMeter: number = getDistance({
                latitude: Number(homeNode.lat),
                longitude: Number(homeNode.long)
            }, {
                latitude: Number(passedData.lat),
                longitude: Number(passedData.long)
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

    return [previousDistance, nextDistance, previousNodePath, nextNodePath, airDistanceHome , absoluteDistanceHome] as const;
}