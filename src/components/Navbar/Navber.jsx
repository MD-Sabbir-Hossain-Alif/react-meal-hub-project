import React from "react";

const Navber = ({ logo }) => {
    return (
        <>
            <nav className="nav-container">
                <div className="nav-left">
                    <a href="">
                        <img src={logo} alt="" />
                    </a>
                    <a href="">
                        <h1>Meal Hub</h1>
                    </a>
                </div>
                <ul className="nav-right">
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>Blog</li>
                    </a>
                    <a href="">
                        <li>Orders</li>
                    </a>
                    <a href="">
                        <li>Contact</li>
                    </a>
                    <a href="">
                        <li>About</li>
                    </a>
                </ul>
            </nav>
        </>
    );
};

export default Navber;
