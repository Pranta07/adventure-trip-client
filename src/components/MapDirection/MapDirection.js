import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "./MapDirection.css";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
    // eslint-disable-next-line import/no-webpack-loader-syntax
    require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
mapboxgl.accessToken =
    "pk.eyJ1IjoicHJhbnRhMDciLCJhIjoiY2t1eWoxYmVlNzJwZDMxbno2YnRnbDJlciJ9.3VqwO0pl0edXtxrUbeMYBw";

const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [91.83263, 22.33037],
            zoom: 13,
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                workerClass: mapboxgl.workerClass,
            }),
            "top-left"
        );
    }, []);
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;
