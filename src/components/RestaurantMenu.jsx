import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showItemIndex, setShowItemIndex] = useState(null);

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);


    if (resInfo === null) return (<ShimmerMenu />);

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => {
        return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    const handleShowIndex = (index) => {
        if (index === showItemIndex) {
            setShowItemIndex(null)
        } else {
            setShowItemIndex(index);
        }
    }

    console.log(categories);
    return (
        <div className="text-center font-serif">
            <h1 className="font-bold py-2 text-xl">{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            {/* <h2 className="font-bold py-2 text-l">Menu</h2>
            <ul className="mx-8">
                {itemCards.map(item => <li className="list-disc" key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price || item?.card?.info?.defaultPrice} </li>)}
            </ul> */}
            {categories.map((category, index) => <RestaurantCategory
                key={index}
                data={category.card.card}
                showItems={index === showItemIndex}
                handleShowIndex={() => handleShowIndex(index)}
            />)}
        </div>
    );
};


export default RestaurantMenu;