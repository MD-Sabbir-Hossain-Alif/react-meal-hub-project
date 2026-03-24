import React from "react";
import "../FoodCard/FoodCard.css";

const CardOFCart = ({ item }) => {
    return (
        <div className="cart-container">
            <div className="card cart">
                <img src={item.strMealThumb} alt="" />
                <div className="card-content">
                    <h3>{item.strMeal}</h3>
                    <p className="truncate-multiline">{item.strInstructions}</p>
                    <h4
                        style={{
                            color: "black",
                            backgroundColor: "white",
                            padding: "9px",
                            borderRadius: "6px",
                        }}
                    >
                        Quantity: {item.quantity}x
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default CardOFCart;
