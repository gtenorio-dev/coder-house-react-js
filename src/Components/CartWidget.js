import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({items}) => {
    return (
        <a className="cartStyle text-decoration-none" href="#">
              <FontAwesomeIcon icon={faCartShopping} />
              <p className="cartItemCounter">{items}</p>
        </a>
    );
};

export default CartWidget;