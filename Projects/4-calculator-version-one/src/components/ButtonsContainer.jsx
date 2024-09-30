import styles from "./ButtonsContainer.module.css";

const buttonsContainer = () => {
const buttonNames =['C','1','2','+','3','4','-','5','6','+','7','8','/','=','9','0','.'];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map(buttonNames => <button className={styles.button}>{buttonNames}</button> )}
    </div>
  );
};

export default buttonsContainer;
