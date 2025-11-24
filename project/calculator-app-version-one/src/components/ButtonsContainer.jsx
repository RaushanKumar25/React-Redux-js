import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonscontainer = ["C", "1", "2", "3", "+", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];

  return (
    <div className={styles.buttonsContainers}>
      {buttonscontainer.map((buttonName) => (
        <button className={styles.button}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
