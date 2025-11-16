const FoodItems = () => {
    let foodItems = ["dal", "rice", "bread", "egg", "fish"];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
