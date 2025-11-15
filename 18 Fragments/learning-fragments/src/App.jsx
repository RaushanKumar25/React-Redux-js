import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = [];
  // let foodItems = ["dal", "rice", "bread", "egg", "fish"];
  let emptyMessage = [foodItems.length == 0 ? <h3>No Food Items Available</h3> : null];

  return (
    <>
      <h1>Healthy Food Items</h1>
      {emptyMessage}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
