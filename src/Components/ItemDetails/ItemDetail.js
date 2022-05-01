import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ItemCounter from "./ItemCounter";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, title, price, description, image, stock }) => {
    const { cart, addItemToCart, isInCart, removeCartItem } =
        useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    };

    const addToCart = () => {
        const itemToAdd = {
            id,
            title,
            price,
            image,
            quantity,
        };

        addItemToCart(itemToAdd);
    };

    const removeItemFromCart = () => {
        removeCartItem(id);
    };

    const printCart = () => {
        console.log(cart);
    };

    return (
        <div>
            <Button
                variant="outline-secondary"
                className="px-4 mt-4"
                onClick={handleNavigate}
            >
                Back
            </Button>
            <div>
                <Row xs={1} md={2} className="align-items-center">
                    <Col>
                        <Container className="d-flex justify-content-center m-auto">
                            <img src={image} className="img-fluid m-auto" />
                        </Container>
                    </Col>
                    <Col>
                        <Container style={{ width: "22rem" }}>
                            <Card className="m-auto p-4">
                                <Card.Body>
                                    <Card.Title className="mb-5">
                                        {title}
                                    </Card.Title>
                                    <Card.Subtitle
                                        style={{ fontSize: "1.5rem" }}
                                    >
                                        ${Number(price).toFixed(2)}
                                    </Card.Subtitle>

                                    {isInCart(id) && (
                                        <Container className="mb-2 mt-3">
                                            <div className="d-grid gap-2 mt-5">
                                                <Button
                                                    as={Link}
                                                    to="/cart"
                                                    variant="primary"
                                                >
                                                    Go to cart
                                                </Button>
                                                <Button
                                                    variant="outline-danger"
                                                    onClick={removeItemFromCart}
                                                >
                                                    Remove from cart
                                                </Button>
                                            </div>
                                        </Container>
                                    )}

                                    {!isInCart(id) && stock != 0 && (
                                        <Container className="mb-2 mt-3">
                                            <div className="d-grid gap-2">
                                                {stock <= 5 && stock > 0 && (
                                                    <div className="my-2 fs-5 text-primary">
                                                        <span>
                                                            {stock != 1
                                                                ? "Last items in stock!"
                                                                : "Last item!"}
                                                        </span>
                                                    </div>
                                                )}

                                                <ItemCounter
                                                    stock={stock}
                                                    quantity={quantity}
                                                    setQuantity={setQuantity}
                                                />
                                                <Button
                                                    variant="outline-primary"
                                                    onClick={addToCart}
                                                >
                                                    Add to cart
                                                </Button>
                                            </div>
                                        </Container>
                                    )}
                                    {stock === 0 && (
                                        <div className="my-4 text-center fs-5 text-danger">
                                            <span>Out of stock!</span>
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
                <Container className="p-5 my-5 ">
                    <h5>Description</h5>
                    <span>{description}</span>
                </Container>
            </div>
        </div>
    );
};

export default ItemDetail;
