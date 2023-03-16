import AttractionList from "./AttractionList";
import AttractionCard from "./AttractionCard";
import "./Main.css";
import { useState } from "react";

function Main() {
    const APIkey = "5ae2e3f221c38a28845f05b6c0fc25f5303aa7c715b3aeb6282b4ef5";

    const [city, setCity] = useState("");
    const [attractionsList, setAttractionsList] = useState([]);
    const [attractionDetails, setAttractionDetails] = useState({});

    async function getAttractions() {
        const locationResponse = await fetch(
            `https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${APIkey}`
        );
        const locationData = await locationResponse.json();
        const { lat, lon } = locationData;
        const attractionsResponse = await fetch(
            `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${lon}&lat=${lat}&apikey=${APIkey}`
        );
        const attractionsData = await attractionsResponse.json();
        const attractionsToDisplay = attractionsData.features.filter(attraction => attraction.properties.name)
        console.log(attractionsData.features);
        setAttractionsList(attractionsToDisplay);
    }

    async function getAttractionDetails(attraction) {
        const detailsResponse = await fetch(
            `http://api.opentripmap.com/0.1/en/places/xid/${attraction.properties.xid}?apikey=${APIkey}`
        );
        const detailsData = await detailsResponse.json();
        setAttractionDetails(detailsData);
        console.log(detailsData);
    }

    return (
        <div className="main">
            <div className="searchbar">
                <input onChange={(event) => setCity(event.target.value)} placeholder="City" />
                <button onClick={getAttractions}>Search</button>
            </div>
            <div className="attractionsDisplay">
                <AttractionList
                    attractionsList={attractionsList}
                    getAttractionDetails={getAttractionDetails}
                />
                <AttractionCard attractionDetails={attractionDetails} />
            </div>
        </div>
    );
}

export default Main;
