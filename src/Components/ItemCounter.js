import React, { useState, useEffect } from "react";
import { Button, Container, InputGroup, Form } from "react-bootstrap";

const ProductItem = ({ stock = 5, onAdd, quantity, setQuantity }) => {
  const increase = () => {
    if (quantity != stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container className="mt-5 mb-4">
      <div className="d-grid gap-2">
        <InputGroup className="mb-3">
          <Button variant="outline-primary" className="px-4" onClick={decrease}>
            -
          </Button>
          <Form.Control
            className="text-center"
            placeholder={quantity}
            disabled
          />
          <Button variant="outline-primary" className="px-4" onClick={increase}>
            +
          </Button>
        </InputGroup>
        <Button variant="outline-primary" onClick={onAdd}>
          Agregar al carrito
        </Button>
      </div>
    </Container>
  );
};

export default ProductItem;
