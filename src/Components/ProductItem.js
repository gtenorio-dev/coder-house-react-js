import React, { useState, useEffect } from "react";
import { Card, Button, Container, InputGroup, Form } from "react-bootstrap";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    // if (quantity != STOCK!!) {
      setQuantity(quantity + 1);
    // }
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container className="my-5">
      <Card style={{ width: "18rem" }} className="m-auto">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          {/* <Card.Subtitle>{product.title}</Card.Subtitle> */}
          <Card.Title className="my-5">${product.price}</Card.Title>
          <div className="d-grid gap-2">
            <InputGroup className="mb-3">
              <Button
                variant="outline-primary"
                className="px-4"
                onClick={() => decrease()}
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
                onClick={() => increase()}
              >
                +
              </Button>
            </InputGroup>
            <Button variant="outline-primary">Agregar al carrito</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductItem;
