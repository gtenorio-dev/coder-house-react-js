import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, title, quantity, price, image }) => {
    const { removeCartItem } = useContext(CartContext);

    const totalPrice = () => (price * quantity).toFixed(2);

    return (
        <Card className="my-4 mx-auto px-2 py-4">
            <Row xs={1} md={3} style={{ maxHeight: "12rem" }}>
                <Col className="">
                    <Card.Img
                        variant="top"
                        className="img"
                        src={image}
                        style={{
                            // width: "100%",
                            objectFit: "contain",
                            height: "10rem",
                        }}
                    />
                </Col>
                <Col>
                    <Card.Title>{title}</Card.Title>
                    <Container className="d-flex my-4 text-center">
                        <Card.Text>Price: ${price.toFixed(2)}</Card.Text>
                        <Card.Text className="mx-4">
                            Qty: {quantity}
                        </Card.Text>
                    </Container>
                    <Card.Subtitle>${totalPrice()}</Card.Subtitle>
                </Col>
                <Col className="m-auto text-center">
                    <Button
                        className="my-4"
                        variant="danger"
                        size="lg"
                        onClick={() => removeCartItem(id)}
                    >
                        <FontAwesomeIcon icon={faTrashCan} />
                    </Button>
                </Col>
            </Row>
            <Container className=" d-flex">
                <Container></Container>
            </Container>
        </Card>
    );
};

export default CartItem;
