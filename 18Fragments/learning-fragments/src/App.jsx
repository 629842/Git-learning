import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/Foodinput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState(["Rice", "Milk", "Dal"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="Food-Heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above is the list of Healthy Food that are good for your health and well being.
          </p>
      </Container> */}
    </>
  );
}

export default App;
