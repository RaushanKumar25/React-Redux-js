const CurrentTime = () => {
  let time = new Date();
  return (
    <h1>
      Current Date and Time: {time.toLocaleDateString()} {time.toLocaleTimeString()}
    </h1>
  );
};

export default CurrentTime;
