import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ItemList } from "./ItemList";

const productList = [
  {
    id: 1,
    name: "Copper Dispenser Laminado",
    description: "Descripcion 1",
    price: 1960,
    stock: 6,
  },
  {
    id: 2,
    name: "Copper Jabonera Laminado",
    description: "Descripcion 2",
    price: 1070,
    stock: 8,
  },
  {
    id: 3,
    name: "Bandeja Eucalipto Natural",
    description: "Descripcion 3",
    price: 2299.99,
    stock: 16,
  },
];

const getProducts = new Promise((res, err) => {
  setTimeout(() => {
    console.log("Request to API (2 seg)");
    res(productList);
  }, 2000);
});

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => setProducts(res))
      .catch((err) => console.log("Error"));
  }, []);

  return (
    <div>
      {/* <ProductItem /> */}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
