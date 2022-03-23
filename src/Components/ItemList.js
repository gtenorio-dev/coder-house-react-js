import React from "react";
import Item from "./Item";

export const ItemList = ({products}) => {
  return (
    <div>
      {products.map((p) => (
        <Item product={p} />
      ))}
    </div>
  );
};
