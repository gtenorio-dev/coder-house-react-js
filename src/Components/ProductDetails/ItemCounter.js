import React, { useState, useEffect } from "react";
import { Button, Container, InputGroup, Form, Card } from "react-bootstrap";

const ProductItem = ({ stock, onAdd, quantity, setQuantity }) => {
    const increase = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };
    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    if (stock == 0) {
        return <span style={{ color: "red" }}>Out of stock!</span>;
    }

    return (
        <>
            <Card.Text>Stock: {stock}</Card.Text>
            <InputGroup className="mb-3">
                <Button
                    variant="outline-primary"
                    className="px-4"
                    onClick={decrease}
                >
                    -
                </Button>
                <Form.Control
                    className="text-center"
                    placeholder={quantity}
                    disabled
                />
                <Button
                    variant="outline-primary"
                    className="px-4"
                    onClick={increase}
                >
                    +
                </Button>
            </InputGroup>
            <Button variant="outline-primary" onClick={onAdd}>
                Add to cart
            </Button>
        </>
    );
};

export default ProductItem;
