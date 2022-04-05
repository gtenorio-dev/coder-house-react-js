import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ItemCounter from "./ItemCounter";
import { Navigate, useNavigate } from "react-router-dom";

const ItemDetail = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  console.log(description);

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
    console.log(itemToAdd);
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
      <div className="">
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
                  <Card.Title className="mb-5">{title}</Card.Title>
                  <Card.Subtitle>${price}</Card.Subtitle>
                  <ItemCounter
                    quantity={quantity}
                    setQuantity={setQuantity}
                    onAdd={addToCart}
                  />
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
