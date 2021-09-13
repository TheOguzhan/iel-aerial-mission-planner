import React from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";
import Table from "../components/Table";
import useData from "../hooks/useData";
import usePushData from "../hooks/usePushData";
import { AdvancedMarker } from "../components/AdvancedMarker";
import { COMMAND_TYPE_OBJECT_ARRAY, FrameObject } from "../objects/objects";
import { wideSpace, lineBreak } from "../constants";
import { saveAs, encodeBase64 } from "@progress/kendo-file-saver";

const center = {
  lat: 41.01202178051607,
  lng: 28.97375452453584,
};

const options = {
  fillColor: "transparent",
  fillOpacity: 0,
  strokeColor: "black",
  strokeOpacity: 1,
  strokeWeight: 5,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

const Screen: React.FC = () => {
  const [data, path] = useData();
  const [pushData] = usePushData();
  const google_maps_api_key: string = process.env
    .REACT_APP_GOOGLE_MAPS_API_KEY as string;
  return (
    <div>
      <LoadScript googleMapsApiKey={google_maps_api_key}>
        <GoogleMap
          mapContainerClassName="md:w-1/2 md:mx-auto"
          mapContainerStyle={{ height: "32rem", minHeight: "10rem" }}
          center={center}
          zoom={15}
          onClick={(e) => {
            let gotData: Data;
            if (data.length === 0) {
              gotData = {
                command: "HOME",
                p1: "0",
                p2: "0",
                p3: "0",
                p4: "0",
                lat: e.latLng.lat()?.toFixed(6).toString(),
                long: e.latLng.lng()?.toFixed(6).toString(),
                alt: "100.000000",
                frame: "ABSOLUTE",
              };
            } else {
              gotData = {
                command: "WAYPOINT",
                p1: "0.00000000",
                p2: "0.00000000",
                p3: "0.00000000",
                p4: "0.00000000",
                lat: e.latLng.lat()?.toFixed(8).toString(),
                long: e.latLng.lng()?.toFixed(8).toString(),
                alt: "100.000000",
                frame: "RELATIVE",
              };
            }

            pushData(gotData);
          }}
        >
          <Polyline path={path} options={options} />
          {data.map((element, index) => {
            if (
              !COMMAND_TYPE_OBJECT_ARRAY[element.command.toString()]
                .longRequired &&
              !COMMAND_TYPE_OBJECT_ARRAY[element.command.toString()].latRequired
            ) {
              return null;
            } else {
              return (
                <AdvancedMarker element={element} index={index} key={index} />
              );
            }
          })}
        </GoogleMap>
      </LoadScript>
      <div className="mx-80 container max-w-sm my-2">
        <button
          className="
          w-24 text-center
          mx-auto p-2 rounded-lg
        dark:border-green-500  dark:bg-green-400
        border-blue-400 bg-blue-300 
          delay-100 duration-300 ease-in-out
        dark:hover:bg-green-300 hover:bg-blue-200"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            let commands: string = "QGC WPL 110" + lineBreak;
            // eslint-disable-next-line array-callback-return
            data.map((element, index) => {
              const num = element.command === "HOME" ? "1" : "0";
              let command =
                index.toString() +
                wideSpace +
                num +
                wideSpace +
                FrameObject[element.frame as string] +
                wideSpace +
                COMMAND_TYPE_OBJECT_ARRAY[element.command.toString()].payload +
                wideSpace +
                element.p1 +
                wideSpace +
                element.p2 +
                wideSpace +
                element.p3 +
                wideSpace +
                element.p4 +
                wideSpace +
                element.lat +
                wideSpace +
                element.long +
                wideSpace +
                element.alt +
                wideSpace +
                "1" +
                lineBreak;
              commands = commands.concat(command.toString());
            });
            const dataURI = "data:text/plain;base64," + encodeBase64(commands);
            saveAs(dataURI, "map.waypoints");
          }}
        >
          Export
        </button>
      </div>
      <Table marks={data} />
    </div>
  );
};

export default Screen;
