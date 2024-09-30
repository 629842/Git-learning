import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";

const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return  <p className={styles.Welcome}>Enjoy your day!</p>
  
};
export default WelcomeMessage;
