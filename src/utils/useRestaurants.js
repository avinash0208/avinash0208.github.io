import { useEffect, useState } from "react";

const useRestaurants = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

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
    }

    return listOfRestaurant;
}

export default useRestaurants;