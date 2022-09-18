import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paratha",
    description: "Every type of Paratha is available",
    price: 90,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "Get your delicious pizza here",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Burger",
    description: "Veg or Non-Veg burger available",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Manchurian",
    description: "Veg or Non-Veg whatever one you like!!",
    price: 18.99,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      description={meal.description}
      name={meal.name}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
