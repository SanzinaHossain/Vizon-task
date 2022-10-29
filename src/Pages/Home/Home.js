import React, { useState } from "react";
import { useEffect } from "react";
import "./Home.css";
import SingleFoodItem from "./SingleFoodItem";
const Home = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, [food]);
  return (
    <div className="bg-black w-full h-auto pt-5 px-4 pb-5">
      <h1 className="text-white text-center text-3xl title">
        Welcome To Our Food World
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 justify-around mt-5">
        {food.map((f) => (
          <SingleFoodItem f={f}></SingleFoodItem>
        ))}
      </div>
    </div>
  );
};

export default Home;
