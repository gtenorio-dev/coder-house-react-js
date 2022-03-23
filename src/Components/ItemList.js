import React from "react";
import Item from "./Item";

const products = [
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

const productsService = new Promise((res, err) => {
  setTimeout(function () {
    console.log("Request to API (2 seg)");
    res(products);
  }, 2000);
});

const getProducts = () => {
  productsService.then(
    (res) => {
      console.log(res);
      return res;
    },
    (err) => {
      console.log("Error!");
    }
  );
};

export const ItemList = () => {
  return (
    <div>
      {products.map((p) => (
        <Item product={p} />
      ))}
    </div>

    // **** COMO HAGO PARA QUE MUESTRE LA LISTA DESPUES DE LOS 2 SEGUNDOS? **** 
    // <div>
    //   {productsService.then((res) => {
    //     res.map((p) => {
    //       <Item product={p} />;
    //     });
    //   })}
    // </div>
  );
};
