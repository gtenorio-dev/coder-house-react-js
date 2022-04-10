import React, { useContext } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, cartTotal, clearCart, removeCartItem } =
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

    if (cart.length == 0) {
        return (
            <Container>
                <span>You don't have items in your cart</span>
            </Container>
        );
    }

    return (
        <Container className="m-5">
            <span style={{ fontSize: "2rem" }}>Products</span>
            <hr />
            {cart.map((prod) => (
                <CartItem {...prod} key={prod.id} />
            ))}

            <hr />
            <Container className="my-4 d-flex justify-content-between align-items-center">
                <Button
                    className=""
                    variant="outline-danger"
                    onClick={clearCart}
                >
                    Clear cart
                </Button>
                <span className="text-end" style={{ fontSize: "1.5rem" }}>
                    Total: ${cartTotal()}
                </span>
            </Container>
        </Container>
    );
};

export default Cart;
