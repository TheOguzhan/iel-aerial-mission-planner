import * as React from "react";
import { Marker, InfoWindow, Polyline } from "@react-google-maps/api";
import useChangeData from "../hooks/useChangeData";
import useGeo from "../hooks/useGeo";
import pink from "../images/pink.svg";
import yellow from "../images/yellow.svg";
import purple from "../images/purple.svg";

export interface IAdvancedMarkerProps {
  element: Data;
  index: number;
}
export function AdvancedMarker(props: IAdvancedMarkerProps) {
  const [changeData] = useChangeData();
  const [visible, setVisible] = React.useState<boolean>(false);
  
  const [
    previousDistance,
    nextDistance,
    previousNodePath,
    nextNodePath,
    airDistanceHome,
    absoluteDistanceHome,
  ] = useGeo(props.element);

  const previousOptions = {
    fillColor: "transparent",
    fillOpacity: 0,
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 3,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };
  const nextOptions = {
    fillColor: "transparent",
    fillOpacity: 0,
    strokeColor: "green",
    strokeOpacity: 1,
    strokeWeight: 3,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  const divStyle = {
    background: `white`,
    padding: 15,
  };
  
  return (
    <React.Fragment>
      <Marker
        position={{
          lat: Number(props.element?.lat),
          lng: Number(props.element?.long),
        }}
        icon={props.element.command === "HOME" ? yellow : (props.element.command === "DO_WINCH" ? purple : pink)}
        draggable={true}
        onDragEnd={(e) => {
          let gotData: Data = {
            ...props.element,
            lat: e.latLng.lat()?.toFixed(8).toString(),
            long: e.latLng.lng()?.toFixed(8).toString(),
          };
          changeData(props.index, gotData);
        }}
        onDblClick={() => {
          setVisible(true);
        }}
      />

      {visible ? (
        <React.Fragment>
          {previousDistance !== 0 ? (
            <Polyline path={previousNodePath} options={previousOptions} />
          ) : null}
          {nextDistance !== 0 ? (
            <Polyline path={nextNodePath} options={nextOptions} />
          ) : null}
          <InfoWindow
            position={{
              lat: Number(props.element?.lat),
              lng: Number(props.element?.long),
            }}
            onCloseClick={() => {
              setVisible(false);
            }}
          >
            <div style={divStyle}>
              {previousDistance !== 0 ? (
                <h1 style={{ color: "red" }}>
                  {previousDistance}m from previous node
                </h1>
              ) : null}
              {nextDistance !== 0 ? (
                <h1 style={{ color: "green" }}>{nextDistance}m to next node</h1>
              ) : null}
              {airDistanceHome !== 0 ? (
                <h1 style={{ color: "#C533FD" }}>
                  {airDistanceHome}m to home in air distance
                </h1>
              ) : null}
              {absoluteDistanceHome !== 0 ? (
                <h1 style={{ color: "#006DDB" }}>
                  {absoluteDistanceHome}m to home
                </h1>
              ) : null}
            </div>
          </InfoWindow>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
