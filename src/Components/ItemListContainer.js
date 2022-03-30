import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Container, Spinner } from "react-bootstrap";
import { getProducts } from "./../mocks/fakeAPI";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts
      .then((res) => setProducts(res))
      .catch((err) => console.log("Error reading product from API"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        ""
      )}
      <ItemList products={products} />
    </Container>
  );
};

export default ItemListContainer;
