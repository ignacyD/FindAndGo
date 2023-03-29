import AttractionCard from "./AttractionCard";
import "./Favourites.css"

function Favourites({ userData, setUserData }) {
    if (userData.favourites.length > 0) {
        return (
            <div className="favourites">
                {userData.favourites.map(favourite => <AttractionCard attractionDetails={favourite} isFavourite={true} key={favourite.xid} userData={userData} setUserData={setUserData} />)}
            </div>
        )
    } else {
        return (
            <div className="noFavourites">
                <p>You have no saved attractions yet</p>
            </div>
        )
    }
}

export default Favourites;