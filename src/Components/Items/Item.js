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
                            <div className="my-2 fs-5 text-primary">
                                <span>
                                    {stock != 1
                                        ? "Last items in stock!"
                                        : "Last item!"}
                                </span>
                            </div>
                        )}
                        {stock == 0 && (
                            <div className="my-2 fs-5 text-danger">
                                <span>Out of stock!</span>
                            </div>
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
                                        : "outline-danger"
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
