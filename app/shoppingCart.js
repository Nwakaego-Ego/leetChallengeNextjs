"use client";
import React, { useState } from "react";

const shoppingCart = () => {
  const [addedPrice, setAddedPrice] = useState([]);
  const [initialPrice, setInitialPrice] = useState("");
  const [allCart, setallCart] = useState();

  const items = [
    {
      name: "item 1",
      price: "$ 3",
    },
    {
      name: "item 1",
      price: "$ 3",
    },
    {
      name: "item 1",
      price: "$ 3",
    },
  ];

  const price = (event) => {
    setAddedPrice(event.target.value);
  };

  const priceAll = () => {
    const totalPrice = initialPrice + addedPrice;
    setallCart(totalPrice);
    setAddedPrice("");
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      <input
        type="text"
        onChange={price}
        className="w-40 h-10 border border-red-600"
      />
      {items.map((item) => {
        return (
          <div key={item.id}>
            <p>
              {item.price} {item.name}
            </p>
          </div>
        );
      })}
      <button onClick={priceAll} className="w-40 h-10 border border-red-600 ">
        Total
      </button>

      <p> Total price : {allCart}</p>
    </>
  );
};
export default shoppingCart;
