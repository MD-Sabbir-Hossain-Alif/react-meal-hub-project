import React from "react";
import "./FoodCard.css";

const FoodCard = ({ food, addToCart }) => {
    // console.log(food);
    return (
        <div className="card">
            <img src={food.strMealThumb} alt="" />
            <div className="card-content">
                <h3>{food.strMeal}</h3>
                <p className="truncate-multiline">{food.strInstructions}</p>
                <button onClick={() => addToCart(food)} className="btn">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
