import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }} className="m-auto">
        <Card.Img variant="top" className="px-5 pt-4" src={product.image}/>
        <Card.Body>
          <div className="m-4 text-start">
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle className="my-3 text-muted">
              Price: ${product.price}
            </Card.Subtitle>
          </div>
          <Link to={`/detail/${product.id}`}>
            <div className="text-center">
            <Button variant="outline-primary" className="px-5">
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
