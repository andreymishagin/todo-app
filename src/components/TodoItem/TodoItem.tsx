import React from "react";
import { TodoTaskItem } from "../../types/TodoTaskItem";
import styles from "./todo.item.module.scss";

interface TodoItemProps extends TodoTaskItem {
  /** Коллбэк, удаляющий задачу */
  handleRemoveItem: (id: number) => void;
}

export function TodoItem(props: TodoItemProps) {
  const { id, title, handleRemoveItem } = props;
  return (
    <li className={styles.todoItem}>
      <input type="checkbox" className={styles.checkbox} />
      <div>{title}</div>
      <button onClick={() => handleRemoveItem(id)}>×</button>
    </li>
  );
}
