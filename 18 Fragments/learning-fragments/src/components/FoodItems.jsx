import styles from "./FoodItems.module.css";
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {" "}
      {items.map((item) => (
        <li key={item} className="list-group-item kg-item">
          {" "}
          <span className="kg-span">{item}</span>{" "}
        </li>
      ))}{" "}
    </ul>
  );
};
export default FoodItems;
