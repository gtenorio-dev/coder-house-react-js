import React from "react";
import { Row, Container } from "react-bootstrap";
import Item from "./Item";

export const ItemList = ({ products }) => {
  return (
    <Container className="my-5">
      <Row xs={1} md={2} xl={3} className="g-4 align-items-center">
        {products.map((p) => (
          <Item {...p} key={p.id} />
        ))}
      </Row>
    </Container>
  );
};
