import React from "react";
import CardOfCart from "./CardOfCart";
const CartSection = ({ cart, handelOrder }) => {
    // console.log(cart);
    return (
        <>
            <h1 className="cart-h1">
                Cart Items: <span>{cart.length}</span>
            </h1>
            <div>
                {cart.map((item) => (
                    <CardOfCart key={item.idMeal} item={item}></CardOfCart>
                ))}
            </div>
            <button
                onClick={() => handelOrder()}
                className="btn"
                style={{
                    width: "68%",
                    margin: "10px 50px",
                }}
            >
                Order
            </button>
        </>
    );
};

export default CartSection;
