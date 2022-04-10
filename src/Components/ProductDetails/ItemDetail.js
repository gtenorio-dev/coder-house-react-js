import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ItemCounter from "./ItemCounter";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
    id,
    title,
    price,
    description,
    category,
    image,
    stock,
}) => {
    const { cart, addItemToCart, isInCart } = useContext(CartContext);

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
        // console.log(itemToAdd);
        addItemToCart(itemToAdd);
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
                <Row>
                    <Col>
                        <Container style={{ width: "22rem" }}>
                            <img src={image} className="img-fluid m-auto p-4" />
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

                                    {!isInCart(id) ? (
                                        <Container className="mb-2 mt-3">
                                            <div className="d-grid gap-2">
                                                {stock <= 5 && stock > 0 && (
                                                    <span
                                                        style={{
                                                            color: "blue",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {stock != 1
                                                            ? "Last items in stock!"
                                                            : "Last item!"}
                                                    </span>
                                                )}

                                                <ItemCounter
                                                    stock={stock}
                                                    quantity={quantity}
                                                    setQuantity={setQuantity}
                                                    onAdd={addToCart}
                                                />
                                            </div>
                                        </Container>
                                    ) : (
                                        <div className="text-center mt-5 mb-2">
                                            {/* //TODO editar cantidad  --> Minuto 50 */}
                                            <Button
                                                variant="outline-primary"
                                                className="mx-2"
                                            >
                                                Edit
                                            </Button>
                                            <Link to="/cart">
                                                <Button variant="primary">
                                                    Go to cart
                                                </Button>
                                            </Link>
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
                <Container className="p-5">
                    <h5>Description</h5>
                    <span>{description}</span>
                </Container>
            </div>
        </div>
    );
};

export default ItemDetail;
