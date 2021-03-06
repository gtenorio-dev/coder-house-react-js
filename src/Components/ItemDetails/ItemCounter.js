import React from "react";
import { Button, InputGroup, Form, Card } from "react-bootstrap";

const ItemCounter = ({ stock, quantity, setQuantity }) => {
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
        <div className="d-flex flex-column mx-auto" style={{ width: "10rem" }}>
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
        </div>
    );
};

export default ItemCounter;
