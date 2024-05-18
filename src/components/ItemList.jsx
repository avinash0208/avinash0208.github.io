import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    // dispatch an action
    dispatch(addItem(item))
  }

  return <div>
    <ul>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 text-left">
          <div >
            <div className="flex justify-between items-center">
              {item?.card?.info?.imageId &&
                <img alt="food-image" src={CDN_URL + item?.card?.info?.imageId} className="w-16"></img>
              }
              <button onClick={() => handleAddItems(item)} className="px-3 bg-green-200 shadow-lg rounded-full text-sm"> Add +</button>
            </div>

            <span className="my-4">{item?.card?.info?.name}</span>
            <span>  - Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
          </div>
          <p className="text-xs">{item?.card?.info?.description}</p>

        </div>))
      }
    </ul >
  </div >
}

export default ItemList;