function AttractionList({ attractionsList, getAttractionDetails }) {

    return (
        <div className="attractionList">
            {attractionsList.map((attraction) => (
                <div key={attraction.properties.xid} onClick={() => getAttractionDetails(attraction)}>
                    <h3>{attraction.properties.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default AttractionList;
