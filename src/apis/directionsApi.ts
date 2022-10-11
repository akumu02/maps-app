import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1Ijoia2F0aGVyaW5lLXByb3Zvc3RlbGFyYSIsImEiOiJjbDkzYnFmbXIxOGpyM3BuMzF1YXJ1YmE1In0.pMAWU60k4nOPwfpp1JdK7A",
  },
});

export default directionsApi;
