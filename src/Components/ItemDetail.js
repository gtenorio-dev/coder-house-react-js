import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ProductItem from "./ProductItem";

const ItemDetail = ({ product }) => {
  // console.log(product);

  return (
      <Container>
        <Row>
          <Col>
            <img // eslint-disable-line jsx-a11y/alt-text
              src={product.image}
              className="img-fluid p-5"
              style={{ width: "22rem" }}
            />
          </Col>
          <Col>
            <h4 className="my-4">{product.title}</h4>
            <Container>
              <ProductItem product = {product}/>
            </Container>
          </Col>
        </Row>
        <Container className="m-5">
          <h5>Descripcion</h5>
          <p>{product.description}</p>
        </Container>
      </Container>
  );
};

export default ItemDetail;
