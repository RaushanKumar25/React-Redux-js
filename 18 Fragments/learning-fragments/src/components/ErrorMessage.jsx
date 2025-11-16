const Errormessage = () => {
    let foodItems = ["dal", "rice", "bread", "egg", "fish"];
    return <>[foodItems.length == 0 ? <h3>No Food Items Available</h3> : null];</>
}
export default ErrorMessage;