import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Container, Spinner } from "react-bootstrap";
import { getProducts, getProductsByCategory } from "./../mocks/fakeAPI";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryName) {
      setProducts([]);
      
      // TODO COMO HAGO PARA SEPARAR ESTO EN UNA FUNCION EXTERNA??
      fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then((res) => res.json())
        .then((resData) => {
          console.log(resData);
          setProducts(resData);
        })
        .catch((err) => console.warn(err))
        .finally(() => setLoading(false));
    } else {
      getProducts
        .then((res) => setProducts(res))
        .catch((err) => console.warn(err))
        .finally(() => setLoading(false));
    }
  }, [categoryName]);

  return (
    <Container>
      {loading ? (
        <div
          className="d-flex justify-content-center my-auto align-items-end"
          style={{ height: "45vh" }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        ""
      )}
      <ItemList products={products} />
    </Container>
  );
};

export default ItemListContainer;
