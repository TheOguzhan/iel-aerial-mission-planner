import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import config from "../config";

const center = {
  lat: 41.01202178051607,
  lng: 28.97375452453584,
};


const Screen: React.FC = () => {
  const google_maps_api_key = config.REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <div>
      <LoadScript googleMapsApiKey={google_maps_api_key}>
        <GoogleMap
          mapContainerClassName="md:w-1/2 md:mx-auto"
          mapContainerStyle={{height: "32rem", minHeight: "10rem"}}
          center={center}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Screen;
