import React, { use, useState } from "react";
import FoodCard from "../FoodCard/FoodCard";
import CartSection from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";

const FoodSection = ({ foodDataRes }) => {
    const data = use(foodDataRes);
    // console.log(foodData);
    const foods = data.meals;
    // console.log(foods);
    const [cart, setCart] = useState([]);
    const addToCart = (cartFood) => {
        setCart((cart) => {
            const existingItem = cart.find(
                (item) => item.idMeal === cartFood.idMeal,
            );

            if (existingItem) {
                // increase quantity
                return cart.map((item) =>
                    item.idMeal === cartFood.idMeal
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            } else {
                // add new item
                return [...cart, { ...cartFood, quantity: 1 }];
            }
        });
    };
    const handelOrder = () => {
        setCart([]);
        if (cart.length === 0) {
            toast.error("Add cart first for Order");
        } else {
            toast.success("Order Completed!");
        }
    };

    return (
        <>
            <div className="parent-container">
                <div style={{ width: "75%" }} className="card-container">
                    {foods.map((food) => (
                        <FoodCard
                            key={food.idMeal}
                            food={food}
                            addToCart={addToCart}
                        ></FoodCard>
                    ))}
                </div>
                <div style={{ width: "25%", background: "#cecece" }}>
                    <CartSection
                        cart={cart}
                        handelOrder={handelOrder}
                    ></CartSection>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default FoodSection;
