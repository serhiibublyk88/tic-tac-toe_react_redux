
import { useDispatch } from "react-redux";
import { resetGame } from "../actions/gameActions";
import styles from "../App.module.css";

const ResetButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <button className={styles.resetButton} onClick={handleReset}>
      Restart
    </button>
  );
};

export default ResetButton;
