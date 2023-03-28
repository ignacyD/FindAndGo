import AttractionCard from "./AttractionCard";
import "./Favourites.css"

function Favourites({userData}) {
    return(
        <div className="favourites">
            {userData.favourites.map(favourite => <AttractionCard attractionDetails={favourite} isFavourite={true} key={favourite.xid}/>)}
        </div>
    )
}

export default Favourites;