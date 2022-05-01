import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemDetails/ItemCounter";
import { db } from "../../firebase/config";
import {
    collection,
    documentId,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import SpinnerComp from "../Spinner/SpinnerComp";

const CartItem = ({ id, title, quantity, price, image }) => {
    const { removeCartItem, updateItem } = useContext(CartContext);
    const [itemQuantity, setItemQuantity] = useState(quantity);
    const [stock, setStock] = useState(0);
    const [loading, setLoading] = useState(true);

    const totalPrice = () => (price * itemQuantity).toFixed(2);

    const getItemStock = async () => {
        const productsRef = collection(db, "products");
        const q = query(productsRef, where(documentId(), "==", id));
        const products = await getDocs(q);
        setStock(products.docs[0].data().stock);
    };

    const updateCartItem = () => {
        const item = {
            id,
            title,
            quantity: itemQuantity,
            price,
            image,
        };
        updateItem(item);
    };

    useEffect(() => {
        updateCartItem();
    }, [itemQuantity]);

    useEffect(async () => {
        await getItemStock().finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <Card
                className="my-4 mx-auto px-2 py-4"
                style={{ height: "15rem" }}
            >
                <div className="m-auto">
                    <SpinnerComp />
                </div>
            </Card>
        );
    }

    return (
        <Card className="my-5 mx-auto px-2 py-4">
            <Row xs={1} md={2} lg={3}>
                <Col className="m-auto p-2">
                    <Link to={`/detail/${id}`}>
                        <Card.Img
                            variant="top"
                            className="img"
                            src={image}
                            style={{
                                objectFit: "contain",
                                height: "12rem",
                            }}
                        />
                    </Link>
                </Col>
                <Col className="p-4">
                    <Card.Title>{title}</Card.Title>
                    <div className="my-4">
                        <Card.Text>Price: ${price.toFixed(2)}</Card.Text>
                        <Card.Text className="d-flex align-items-center">
                            <span>Qty:</span>
                            <ItemCounter
                                stock={stock}
                                quantity={itemQuantity}
                                setQuantity={setItemQuantity}
                                editCartQuantity={true}
                            />
                        </Card.Text>
                    </div>
                    <Card.Subtitle>${totalPrice()}</Card.Subtitle>
                </Col>
                <Col className="m-auto text-center">
                    <Button
                        className="my-4"
                        variant="outline-danger"
                        // size="lg"
                        onClick={() => removeCartItem(id)}
                    >
                        <FontAwesomeIcon icon={faTrashCan} />
                        <span> Remove</span>
                    </Button>
                </Col>
            </Row>
        </Card>
    );
};

export default CartItem;
