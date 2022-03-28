import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../mocks/fakeAPI";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts
      .then((res) => setProduct(res.find((product) => product.id === 1)))
      .catch((err) => console.log("Error reading product from API"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
