import { Suspense } from "react";
import "./App.css";
import logo from "./assets/meal-hub-logo.png";
import FoodSection from "./components/FoodSection/FoodSection";
import Navber from "./components/Navbar/Navber";

const foodDataRes = fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
).then((res) => res.json());

function App() {
    return (
        <>
            <Navber logo={logo}></Navber>
            <Suspense fallback={<h1>Data is Loading...</h1>}>
                <FoodSection foodDataRes={foodDataRes}></FoodSection>
            </Suspense>
        </>
    );
}

export default App;
