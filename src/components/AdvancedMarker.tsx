import * as React from "react";
import { Marker, InfoWindow, Polyline } from "@react-google-maps/api";
import useChangeData from "../hooks/useChangeData";
import useGeo from "../hooks/useGeo";

export interface IAdvancedMarkerProps {
  element: Data;
  index: number;
}

export function AdvancedMarker(props: IAdvancedMarkerProps) {
  const [changeData] = useChangeData();
  const [visible, setVisible] = React.useState<boolean>(false);
  const [previousDistance, nextDistance, previousNodePath, nextNodePath] =
    useGeo(props.element);

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
    strokeColor: "blue",
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
    <>
      <Marker
        position={{
          lat: Number(props.element?.lat),
          lng: Number(props.element?.long),
        }}
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
        <>
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
                <h1 style={{ color: "blue" }}>{nextDistance} m to next node</h1>
              ) : null}
            </div>
          </InfoWindow>
        </>
      ) : null}
    </>
  );
}
