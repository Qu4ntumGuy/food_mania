import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httperror, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-d2148-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

        if(!response.ok){
          throw new Error("OOPS! Something went wrong");
        }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    try{
      fetchMeals();
    }catch(error){
      setIsLoading(false);
      setHttpError(error.message);
    }
  }, []);

  if(isLoading) {
    return <section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>;
  }

  if(httperror){
    return <section className={classes.mealsError}>
      <p>{httperror}</p>
    </section>;
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
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
