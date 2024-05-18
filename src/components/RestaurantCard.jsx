import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { resData } = props;
	const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = resData?.info
	return (
		<div className="res-card m-4 p-4 w-60 h-fit rounded-md hover:border border-black" style={{ backgroundColor: "#f0f0f0" }}>
			<img className="res-logo rounded-lg"
				alt="res-logo"
				src={CDN_URL + cloudinaryImageId}></img>
			<h3 className="font-bold py-2 text-l">{name}</h3>
			<h4>{cuisines.join(" , ")}</h4>
			<h4>{avgRating} stars</h4>
			<h4>{costForTwo}</h4>
			<h4>ETA :{sla.deliveryTime} min</h4>
		</div>
	)
}

// HOC
// input - Restaurant Card ==> RestaurantCardVeg

export const withVegLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label className="absolute bg-green-600 text-white m-2 p-2 rounded-md text-xs">Pure Veg</label>
				<RestaurantCard {...props} />
			</div>
		)
	}
}

export default RestaurantCard;