import React, { useContext } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";

import "./Cart.css";
import Checkout from "./../Checkout/Checkout";

const Cart = () => {
    const { cart, cartTotal, clearCart } =
        useContext(CartContext);

    console.log(cart);

    const navigate = useNavigate();

    const navigateToShop = () => navigate("/");

    if (cart.length == 0) {
        return (
            <Card className="m-5 p-5">
                <Container>
                    <div>
                        <span style={{ fontSize: "2rem" }}>
                            You don't have items in your cart
                        </span>
                    </div>
                    <Button
                        variant="primary"
                        className="my-5"
                        onClick={navigateToShop}
                    >
                        Go to shop
                    </Button>
                </Container>
            </Card>
        );
    }

    return (
        <Container className="m-5 mx-auto">
            <span style={{ fontSize: "2rem" }}>Products</span>
            <hr />
            {cart.map((prod) => (
                <CartItem {...prod} key={prod.id} />
            ))}

            <hr />
            <Container className="my-4 d-flex justify-content-between align-items-center">
                <Button variant="outline-danger" onClick={clearCart}>
                    Clear cart
                </Button>
                <div className="d-flex align-items-center">
                    <span className="text-end mx-4" style={{ fontSize: "1.5rem" }}>
                        Total: ${cartTotal()}
                    </span>
                    <Link to="/checkout">
                        <Button variant="success">
                            Checkout
                        </Button>
                    </Link>
                </div>
            </Container>
        </Container>
    );
};

export default Cart;
