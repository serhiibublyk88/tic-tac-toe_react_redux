
import { useDispatch, useSelector } from "react-redux";
import {
  setField,
  setCurrentPlayer,
  setGameEnded,
  setIsDraw,
} from "../actions/gameActions";
import {
  selectField,
  selectCurrentPlayer,
  selectIsGameEnded,
} from "../selectors";
import styles from "../App.module.css";

const FieldContainer = () => {
  const dispatch = useDispatch();
  const field = useSelector(selectField);
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);

  const handleCellClick = (index) => {
    if (!field[index] && !isGameEnded) {
      const nextPlayer = currentPlayer === "X" ? "O" : "X";
      const updatedField = [...field];
      updatedField[index] = currentPlayer;
      dispatch(setField(updatedField));
      dispatch(setCurrentPlayer(nextPlayer));
      checkGameStatus(updatedField);
    }
  };

  const checkGameStatus = (field) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (field[a] && field[a] === field[b] && field[a] === field[c]) {
        dispatch(setGameEnded(true));
        dispatch(setCurrentPlayer(field[a]));
        return;
      }
    }

    if (!field.includes("")) {
      dispatch(setGameEnded(true));
      dispatch(setIsDraw(true));
    }
  };

  return (
    <div className={styles.field}>
      {field.map((cell, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => handleCellClick(index)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

export default FieldContainer;
