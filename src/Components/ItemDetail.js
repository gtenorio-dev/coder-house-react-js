import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ItemCounter from "./ItemCounter";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const { cart, addItemToCart, isInCart } = useContext(CartContext);
  // console.log(isInCart(id));
  // console.log(cart);

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
    // console.log(itemToAdd);
    addItemToCart(itemToAdd);
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

                  {!isInCart(id)? (
                    <ItemCounter
                      quantity={quantity}
                      setQuantity={setQuantity}
                      onAdd={addToCart}
                    />
                  ) : (
                    <div className="text-center mt-5 mb-2">

                        {/* //TODO editar cantidad  --> Minuto 50 */}
                        <Button variant="outline-primary" className="mx-2">Edit</Button>

                        <Link to="/cart">
                          {/* <div className="text-center mt-5 mb-2"> */}
                            <Button variant="primary">Finish order</Button>
                          {/* </div> */}
                        </Link>
                    </div>
                  )}
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
