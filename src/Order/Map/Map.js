import React from "react";
import styles from "./Map.module.css";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";
import iconMarker from "./marker.svg";

function Map({ markers, className }) {
  return (
    <ReactGoogleMapLoader
      params={{
        key: "AIzaSyAXWDKoK0l4IZ-1UwOqHN5b8h_y3y4Q-cc",
      }}
      render={(googleMaps) =>
        googleMaps && (
          <div className={[styles["map"], className].join(" ")}>
            <ReactGoogleMap
              coordinates={markers.map((marker) => ({
                position: marker.position,
                onLoaded: (googleMaps, map, mapMarker) => {
                  googleMaps.event.addListener(
                    mapMarker,
                    "click",
                    marker.onClick
                  );
                },
                icon: iconMarker,
              }))}
              googleMaps={googleMaps}
              autoFitBounds
              zoomControl={false}
              mapTypeControl={false}
              streetViewControl={false}
              fullscreenControl={false}
            />
          </div>
        )
      }
    />
  );
}

export default Map;
