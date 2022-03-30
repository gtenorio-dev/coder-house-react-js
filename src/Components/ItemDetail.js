import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductItem from "./ProductItem";
import { Navigate, useNavigate } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
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
      <div className="m-2">
        <Row>
          <Col>
            <img
              src={product.image}
              className="img-fluid p-5"
              style={{ width: "22rem" }}
            />
          </Col>
          <Col>
            <h4 className="my-4">{product.title}</h4>
            <Container>
              <ProductItem product={product} />
            </Container>
          </Col>
        </Row>
        <div className="m-5">
          <h5>Description</h5>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
