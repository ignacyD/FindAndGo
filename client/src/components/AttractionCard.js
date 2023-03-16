function AttractionCard({attractionDetails}) {
    return(
        <div className="attractionCard">
            <h1>{attractionDetails.name}</h1>
            {attractionDetails.preview ? <img src={attractionDetails.preview.source} alt={attractionDetails.name}/> : null}
            {attractionDetails.wikipedia_extracts ? <p>{attractionDetails.wikipedia_extracts.text}</p> : null}
            {attractionDetails.otm ? <a href={attractionDetails.otm} target="_blank" rel="noreferrer">Show more at OpenTripMap</a> : null}
        </div>
    )
}

export default AttractionCard;