import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1Ijoia2F0aGVyaW5lLXByb3Zvc3RlbGFyYSIsImEiOiJjbDkzYnFmbXIxOGpyM3BuMzF1YXJ1YmE1In0.pMAWU60k4nOPwfpp1JdK7A",
  },
});

export default searchApi;
