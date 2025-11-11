const CurrentTime = () => {
  let time = new Date();
  return (
    <p className = "lead">
      Current Date and Time: {time.toLocaleDateString()} {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
