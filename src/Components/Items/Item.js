import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, title, image, stock, price }) => {
    return (
        <Col>
            <Card style={{ width: "20rem" }} className="m-auto">
                <Card.Img
                    variant="top"
                    className="p-2"
                    src={image}
                    style={{
                        objectFit: "contain",
                        height: "18rem",
                    }}
                />
                <Card.Body>
                    <div className="m-4 text-start">
                        <Card.Title>{title}</Card.Title>
                        {stock <= 5 && stock > 0 && (
                            <span style={{ color: "blue" }}>
                                {stock != 1
                                    ? "Last items in stock!"
                                    : "Last item!"}
                            </span>
                        )}
                        {stock == 0 && (
                            <span style={{ color: "red" }}>Out of stock!</span>
                        )}
                        <Card.Subtitle className="text-muted">
                            Price: ${Number(price).toFixed(2)}
                        </Card.Subtitle>
                    </div>
                    <div className="text-center">
                        <Link to={`/detail/${id}`}>
                            <Button
                                variant={
                                    stock != 0
                                        ? "outline-primary"
                                        : "outline-secondary"
                                }
                                className="px-5"
                            >
                                View
                            </Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;
