import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/errorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  //let foodItems = [];
   let foodItems = ["dal", "rice", "bread", "egg", "fish"];

  return (
    <>
      <h1 className = "food-heading">Healthy Food Items</h1>

      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
