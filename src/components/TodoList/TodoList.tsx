import React from "react";
import { TodoItem } from "../TodoItem";
import { sortBy } from "lodash";
import styles from "./todo.list.module.scss";
import { TodoItemForm } from "../TodoItemForm";
import { useLocalStorageState } from "../../utils/useLocalStorageState";
import { useId } from "../../utils/useId";
import { TodoTaskItem } from "../../types/TodoTaskItem";

export function TodoList() {
  const [tasks, setTasks] = useLocalStorageState<TodoTaskItem[]>("tasks", []);

  const sortedTasks = React.useMemo(() => sortBy(tasks, "title").reverse(), [tasks]);

  const handleAddItem = (title: string) => {
    const ids = tasks.map((i) => i.id);
    const item = { id: useId(ids), title };
    const tasksCopy = [...tasks, item];
    setTasks(tasksCopy);
  };

  const handleRemoveItem = (id: number) => {
    const filteredTasks = tasks.filter((item) => item.id !== id);
    setTasks(filteredTasks);
  };

  const itemsList = sortedTasks.map((item) => (
    <TodoItem key={item.id} id={item.id} title={item.title} handleRemoveItem={handleRemoveItem} />
  ));

  return (
    <div className={styles.listWrapper}>
      <TodoItemForm handleAddItem={handleAddItem} />

      <div className={styles.divider} />

      <ul className={styles.todoList}>{itemsList}</ul>
    </div>
  );
}
