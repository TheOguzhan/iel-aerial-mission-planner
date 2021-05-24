import React from "react";
import { GoogleMap, LoadScript, Marker, Polygon } from "@react-google-maps/api";
import config from "../config";
import Table from "../components/Table";
import useData from "../hooks/useData";
import usePushData from "../hooks/usePushData";
import useChangeData from "../hooks/useChangeData";


const center = {
  lat: 41.01202178051607,
  lng: 28.97375452453584,
};

const options = {
  fillColor: "transparent",
  fillOpacity: 1,
  strokeColor: "red",
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

const Screen: React.FC = () => {
  const [data,  getPath] = useData();
  const [pushData] = usePushData();
  const [changeData] = useChangeData();
  
  const google_maps_api_key = config.REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <div>
      <LoadScript googleMapsApiKey={google_maps_api_key}>
        <GoogleMap
          mapContainerClassName="md:w-1/2 md:mx-auto"
          mapContainerStyle={{ height: "32rem", minHeight: "10rem" }}
          center={center}
          zoom={15}
          onClick={(e) => {
            let gotData: IData = {
              command: "WAYPOINT",
              p1: "0.00000000",
              p2: "0.00000000",
              p3: "0.00000000",
              p4: "0.00000000",
              lat: e.latLng.lat()?.toFixed(8).toString(),
              long: e.latLng.lng()?.toFixed(8).toString(),
              alt: "100.0",
              frame: "3",
            };
            pushData(gotData);
          }}
        >
          <Polygon paths={getPath()} options={options} />
          {data.map((element, index) => (
            <Marker
              key={index}
              position={{ lat: Number(element.lat), lng: Number(element.long) }}
              draggable={true}
              onDrag={(e) => {
                let gotData: Data = {
                  ...element,
                  lat: e.latLng.lat()?.toFixed(8).toString(),
                  long: e.latLng.lng()?.toFixed(8).toString(),
                };
                changeData(index, gotData);
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      <Table marks={data} />
    </div>
  );
};

export default Screen;
