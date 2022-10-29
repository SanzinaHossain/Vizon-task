import React from "react";

const SingleFoodItem = ({ f }) => {
  const { name, img, details } = f;
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 border-2 border-white hover:border-orange-700 hover:border-4 lg:h-56 h-auto">
      <div>
        <img className="lg:h-full h-56 w-full lg:p-4 p-0" src={img}></img>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">{name}</h2>
        <p className="text-white">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions">
          <button className="btn btn-outline text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodItem;
