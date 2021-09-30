import React from "react";
import styles from "./todo.item.form.module.scss";

interface TodoItemFormProps {
  /** Коллбэк, обрабатывающий создание задачи */
  handleAddItem: (title: string) => void;
}

export function TodoItemForm(props: TodoItemFormProps) {
  const { handleAddItem } = props;
  const [taskTitle, setTaskTitle] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };
  const handleButtonClick = () => {
    handleAddItem(taskTitle);
    setTaskTitle("");
  };
  // ToDo input validation, button styles
  return (
    <div className={styles.formWrapper}>
      <input value={taskTitle} onChange={handleInputChange} className={styles.input} placeholder="What needs to be done?" />
      <button onClick={handleButtonClick}>add item</button>
    </div>
  );
}
