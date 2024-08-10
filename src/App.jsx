
import {FieldContainer,InformationContainer,ResetButton } from "./components";
import styles from "./App.module.css"; 

const App = () => {
  return (
    <div className={styles.game}>
      <InformationContainer />
      <FieldContainer />
      <ResetButton />
    </div>
  );
};

export default App;
