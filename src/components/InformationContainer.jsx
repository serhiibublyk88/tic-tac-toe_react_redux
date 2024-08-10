
import { useSelector } from "react-redux";
import {
  selectCurrentPlayer, 
  selectIsGameEnded,
  selectIsDraw,
} from "../selectors";
import styles from "../App.module.css"; 

const InformationContainer = () => {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);
  const isDraw = useSelector(selectIsDraw);

  return (
    <div className={styles.information}>
      {isDraw && <div className={styles.result}>Draw</div>}
      {!isDraw && isGameEnded && (
        <div className={styles.result}>
          Winner: {currentPlayer === "X" ? "X" : "O"}
        </div>
      )}
      {!isGameEnded && (
        <div className={styles.turn}>
          Turn:{" "}
          <span
            className={
              currentPlayer === "X" ? styles.currentPlayer : styles.player
            }
          >
            {currentPlayer}
          </span>
        </div>
      )}
    </div>
  );
};

export default InformationContainer;
