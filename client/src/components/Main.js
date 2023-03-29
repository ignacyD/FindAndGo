import AttractionList from "./AttractionList";
import AttractionCard from "./AttractionCard";
import "./Main.css";
import { useState } from "react";
import { APIkey, apiUrl } from "./../environments.js";

function Main({ isUserLogged, userData, setUserData }) {
    const [city, setCity] = useState("");
    const [attractionsList, setAttractionsList] = useState([]);
    const [attractionDetails, setAttractionDetails] = useState("");

    async function getAttractions() {
        const locationResponse = await fetch(
            `${apiUrl}/places/geoname?name=${city}&apikey=${APIkey}`
        );
        const { lat, lon } = await locationResponse.json();
        const attractionsResponse = await fetch(
            `${apiUrl}/places/radius?radius=1000&lon=${lon}&lat=${lat}&apikey=${APIkey}`
        );
        const attractionsData = await attractionsResponse.json();
        const attractionsToDisplay = attractionsData.features.filter(attraction => attraction.properties.name);
        setAttractionsList(attractionsToDisplay);
    }

    async function getAttractionDetails(attraction) {
        const detailsResponse = await fetch(
            `http://api.opentripmap.com/0.1/en/places/xid/${attraction.properties.xid}?apikey=${APIkey}`
        );
        const detailsData = await detailsResponse.json();
        setAttractionDetails(detailsData);
    }

    return (
        <div className="main">
            <div className="searchbar">
                <input onChange={(event) => setCity(event.target.value)} placeholder="City" />
                <button onClick={getAttractions}>Search</button>
            </div>
            {attractionsList.length > 0 ? (
                <div className="attractionsDisplay">
                    <AttractionList
                        attractionsList={attractionsList}
                        getAttractionDetails={getAttractionDetails}
                    />
                    <AttractionCard
                        attractionDetails={attractionDetails}
                        isUserLogged={isUserLogged}
                        userData={userData}
                        setUserData={setUserData}
                    />
                </div>
            ) : <div className="backgroundImage"><img src="./background.JPG" alt="background"></img></div>}
        </div>
    );
}

export default Main;
