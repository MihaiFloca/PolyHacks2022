import axios from "axios"
// Code used for api requests here

async function getCoordinates(req) {

    //Need the following parameter: query
    const { query } = req.query;
    return axios.get("https://nominatim.openstreetmap.org/search", {
        params: {
            "q": query,
            "format": "geojson"
        }
    }).then(function (response){
        return response.data.features[0].geometry
    })
}

async function postRoute(req) {
    //API_KEY is a constant value, retrieved from an GraphHopper account
    const API_KEY = "f1642ba1-78c2-4b9c-b291-df83ff1dbf42"

    const { coordinate1, coordinate2, profile } = req.body;
    var params = new URLSearchParams();
    params.append("point", `${coordinate1.lat},${coordinate1.lon}`);
    params.append("point", `${coordinate2.lat},${coordinate2.lon}`)
    params.append("profile", profile);
    params.append("key", API_KEY);
    params.append("points_encoded", false);
    return axios.get("https://graphhopper.com/api/1/route", { params })
        .then(function (response) {
            return response.data
        }
    )
}

export default { 
    getCoordinates, postRoute
};
