import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestuarant] = useState([]);
  const onlineStatus = useOnlineStatus();

  const RestaurantCardVeg = withVegLabel(RestaurantCard);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1349633&lng=75.84322759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  // Conditional rendering
  if (!onlineStatus) {
    return <h1>Looks like you are offline!! Please check your internet connection.</h1>
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return !listOfRestaurant.length ? (<Shimmer />) : (
    <div className="body font-serif">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input className="border border-solid border-black px-2" type="text" placeholder="   Search Restaurant" value={searchText} onChange={(event) => {
            setSearchText(event.target.value)
            // TODO: Implement debouncing here
            const filteredRestaurant = listOfRestaurant.filter((res) => {
              return res.info.name.toLowerCase().includes(event.target.value.toLowerCase())
            });
            console.log(filteredRestaurant)
            setFilteredRestuarant(filteredRestaurant);

          }}></input>
          <button className="px-4 py-2 bg-green-200 m-4 rounded-lg" onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter((res) => {
              return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            });
            console.log(filteredRestaurant)
            setFilteredRestuarant(filteredRestaurant);
          }}>Search</button>
        </div>
        <div className="m-4 p-4">
          <label>UserName: </label>
          <input className="border border-black px-2" value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}>
          </input>
        </div>
        <button className="filter-btn px-4 py-2 bg-gray-200 rounded-lg" onClick={() => {
          setListOfRestaurant(listOfRestaurant.filter(res => res.info.avgRating > 4.2))
        }}>Top Rated Restaurant</button>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map(restaurant =>
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
            {
              restaurant?.info?.veg ? (<RestaurantCardVeg resData={restaurant}></RestaurantCardVeg>) : (<RestaurantCard resData={restaurant}></RestaurantCard>)
            }
            {/* <RestaurantCard resData={restaurant}></RestaurantCard> */}
          </Link>)}
      </div>
    </div>
  )
}

export default Body;