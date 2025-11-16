const ErrorMessage = ({ items }) => {
  if (items.length === 0) {
    return <h3>No Food Items Available</h3>;
  }
  return null;
};

export default ErrorMessage;
