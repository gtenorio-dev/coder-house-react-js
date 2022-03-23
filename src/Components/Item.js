import React, { useState } from "react";
import { Card, Button, Container, InputGroup, Form } from "react-bootstrap";
import ProductItem from "./ProductItem";

const Item = ({ product }) => {
  return (
    <div>
      <Container className="my-4" key={product.id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <div className="m-4 text-start">
              <Card.Title>${product.price}</Card.Title>
              <Card.Subtitle className="my-3 text-muted">
                {product.name}
              </Card.Subtitle>
            </div>
            <Button variant="outline-primary" className="px-5">
              Ver
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Item;
