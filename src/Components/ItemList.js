import React from "react";
import { Row, Container } from "react-bootstrap";
import Item from "./Item";

export const ItemList = ({ products }) => {
  return (
    <Container className="m-5">
      <Row xs={1} md={2} xl={3} className="g-4">
        {products.map((p) => (
          <Item product={p} key={p.id} />
        ))}
      </Row>
    </Container>
  );
};
