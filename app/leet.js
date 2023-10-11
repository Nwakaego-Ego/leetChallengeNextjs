"use client";
import { useEffect, useState } from "react";

const leet = () => {
  const [itemList, setItemList] = useState([]);
  const [serving, setServing] = useState(1);

  const recipe = [
    { name: "Flour", quantity: 2 },
    { name: "Sugar", quantity: 1 },
  ];

  const collectiveItem = (recipes, serving) => {
    return recipes.map((item) => {
      return {
        name: item.name,
        quantity: item.quantity * serving,
      };
    });
  };

  useEffect(() => {
    const newRecipe = collectiveItem(recipe, serving);
    setItemList(newRecipe);
  });

  return (
    <div>
      <h1>Recipe Ingredients Calculator</h1>
      <label>
        Number of Servings:
        <input
          type="number"
          value={serving}
          onChange={(e) => setServing(e.target.value)}
        />
      </label>
      <ul>
        {itemList.map(function (ingredient, index) {
          return (
            <li key={index}>
              {ingredient.quantity} {ingredient.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default leet;
