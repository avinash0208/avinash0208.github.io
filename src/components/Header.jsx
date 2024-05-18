import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnState, setBtnState] = useState(true);
    // if no dependency array => useEffect is called on every render
    // if empty dependency array => useEffect is called on only first render
    // if dependency on btnState, it will called everytime btnState is changed
    useEffect(() => {
        console.log("useEffect called");
    })

    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);

    const onlineStatus = useOnlineStatus();

    // Subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems)


    return (
        <div className="flex justify-between bg-blue-100 shadow-lg">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}></img>
            </div>
            <div className="nav-items flex items-center font-serif">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/Cart">Cart ({cartItems.length} Items )</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <button onClick={() => { setBtnState(!btnState) }} className="login">{btnState ? "Login" : "Logout"}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;