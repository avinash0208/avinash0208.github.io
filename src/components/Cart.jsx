import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    console.log(cartItems);
    return (
        <div className="text-center m-4 p-4">
            {!cartItems.length ?
                <h1>Cart is Empty. Add items to the cart</h1> :
                <button onClick={handleClearCart} className="p-4 bg-red-500">Clear Cart</button>
            }
            <div>
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}

export default Cart;