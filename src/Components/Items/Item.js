import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, title, image, stock, price }) => {
    return (
        <Col>
            <Card style={{ width: "18rem" }} className="m-auto">
                <Card.Img variant="top" className="px-5 pt-4" src={image} style={{
                                // width: "100%",
                                objectFit: "contain",
                                height: "18rem",
                            }}/>
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
                    <Link to={`/detail/${id}`}>
                        <div className="text-center">
                            <Button variant={stock != 0 ? "outline-primary":"outline-secondary"} className="px-5">
                                View
                            </Button>
                        </div>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;
