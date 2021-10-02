import React from "react";
import styles from "./todo.item.form.module.scss";
import { Input } from "../../ui-kit/Input";

interface TodoItemFormProps {
  /** Коллбэк, обрабатывающий создание задачи */
  handleAddItem: (title: string) => void;
}

export function TodoItemForm(props: TodoItemFormProps) {
  const { handleAddItem } = props;
  const [taskTitle, setTaskTitle] = React.useState<string>("");

  const handleButtonClick = () => {
    if (!taskTitle) return;
    handleAddItem(taskTitle);
    setTaskTitle("");
  };

  return (
    <div className={styles.formWrapper}>
      <Input value={taskTitle} onChange={setTaskTitle} onEnterPress={handleButtonClick} placeholder="What needs to be done?" />
      <button onClick={handleButtonClick} className={styles.button}>
        Add task
      </button>
    </div>
  );
}
