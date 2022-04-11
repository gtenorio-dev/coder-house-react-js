import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import "./Cart.css";


const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" style={{ textDecoration: "none" }}>
            <span className="cartStyle">
                <FontAwesomeIcon icon={faCartShopping} className="myStyle"/>
                <span className="cartItemCounter mb-3">
                    {cartQuantity() || ""}
                </span>
            </span>
        </Link>
    );
};

export default CartWidget;
