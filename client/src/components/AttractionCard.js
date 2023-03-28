function AttractionCard({ attractionDetails, isUserLogged, userData, setUserData, isFavourite }) {

    function addToFavourites() {
        setUserData((existingValues) => ({
            ...existingValues,
            favourites: [...userData.favourites, attractionDetails],
        }))
        fetch("http://localhost:3001/favourites", {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({attraction: attractionDetails, userData: userData}),
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => {
                console.log(error)
            });
    }

    function removeFromFavourites(xid) {
        console.log(xid)
    }

    return (
        <div className="attractionCard">
            <h1>{attractionDetails.name}</h1>
            {attractionDetails.preview ? <img src={attractionDetails.preview.source} alt={attractionDetails.name} /> : null}
            {attractionDetails.wikipedia_extracts ? <p>{attractionDetails.wikipedia_extracts.text}</p> : null}
            {(isUserLogged && attractionDetails) && <button onClick={addToFavourites}>Add to favourites</button>}
            {isFavourite && <button onClick={() => removeFromFavourites(attractionDetails.xid)}>Remove from favourites</button>}
            {attractionDetails.otm ? <a href={attractionDetails.otm} target="_blank" rel="noreferrer">Show more at OpenTripMap</a> : null}
        </div>
    )
}

export default AttractionCard;