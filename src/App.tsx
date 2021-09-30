import React from "react";
import styles from "./app.module.scss";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className={styles.root}>
      <TodoList />
    </div>
  );
}

export default App;
