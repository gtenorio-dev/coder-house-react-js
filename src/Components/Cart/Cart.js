import React, { useContext } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const { cart, cartTotal, clearCart } = useContext(CartContext);

    console.log(cart);

    const navigate = useNavigate();

    const navigateToShop = () => navigate("/");

    if (cart.length == 0) {
        return (
            <Container>
                <Card
                    className="my-5 mx-auto p-5"
                    style={{ maxWidth: "50rem" }}
                >
                    <Container className="text-center">
                        <div>
                            <span className="fs-2">
                                You don't have items in your cart
                            </span>
                        </div>
                        <Button
                            variant="primary"
                            className="my-5"
                            size="lg"
                            onClick={navigateToShop}
                        >
                            Go to shop
                        </Button>
                    </Container>
                </Card>
            </Container>
        );
    }

    return (
        <Container className=" mx-auto marginToFooter">
            <div className="text-center mx-5">
                <span style={{ fontSize: "2rem" }}>Products</span>
            </div>
            {cart.map((prod) => (
                <CartItem {...prod} key={prod.id} />
            ))}

            <Container className="checkoutContainer ">
                <div>
                    <Button variant="outline-danger" onClick={clearCart}>
                        Clear cart
                    </Button>
                </div>
                <div className="d-flex align-items-center justify-content-end my-5 text-end ">
                    <span
                        className="mx-5 fs-3"
                    >
                        Total ${cartTotal()}
                    </span>
                    <Link to="/checkout">
                        <Button variant="primary" size="lg" className="ml-5">
                            Checkout
                        </Button>
                    </Link>
                </div>
            </Container>
        </Container>
    );
};

export default Cart;
