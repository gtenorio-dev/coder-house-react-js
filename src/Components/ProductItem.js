import React, { useState } from "react";
import {
  Card,
  Button,
  Container,
  InputGroup,
  Form,
} from "react-bootstrap";

const ProductItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container className="my-4">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Product name</Card.Title>
          <Card.Text>Product price</Card.Text>
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
