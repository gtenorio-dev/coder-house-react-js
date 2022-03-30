import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../mocks/fakeAPI";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  console.log(itemId);
  console.log(product);

  useEffect(() => {
    setLoading(true);
    
    getProducts
      .then((res) => setProduct(res.find((prod) => prod.id === Number(itemId))))
      .catch((err) => console.log("Error reading product from API"))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemDetail product={product} />
      )}
    </Container>
  );
};

export default ItemDetailContainer;
