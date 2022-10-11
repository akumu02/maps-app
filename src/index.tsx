/* eslint import/no-webpack-loader-syntax: off */

import React from "react";
import ReactDOM from "react-dom";
import { MapsApp } from "./MapsApp";

//@ts-ignore
import mapboxgl from "!mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2F0aGVyaW5lLXByb3Zvc3RlbGFyYSIsImEiOiJjbDkzYnFmbXIxOGpyM3BuMzF1YXJ1YmE1In0.pMAWU60k4nOPwfpp1JdK7A";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de Geolocation");
  throw new Error("Tu navegador no tiene opción de Geolocation");
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById("root")
);
