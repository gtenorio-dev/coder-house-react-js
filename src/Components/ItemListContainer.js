import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ItemList } from "./ItemList";
import { Spinner } from "react-bootstrap";
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
    <div>
      {/* <ProductItem />  */}
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        ""
      )}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
