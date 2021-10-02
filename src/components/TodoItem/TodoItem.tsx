import React from "react";
import { DeleteIcon } from "../../icons/Delete";
import { DoneIcon } from "../../icons/Done";
import { EditIcon } from "../../icons/Edit";
import { TodoTaskItem } from "../../types/TodoTaskItem";
import { Input } from "../../ui-kit/Input";
import styles from "./todo.item.module.scss";

interface TodoItemProps extends TodoTaskItem {
  /** Коллбэк, удаляющий задачу */
  handleRemoveItem: (id: number) => void;
  /** Коллбэк, редактирующий задачу */
  handleEditItem: (id: number, value: string, isCompleted: boolean) => void;
}

export function TodoItem(props: TodoItemProps) {
  const { id, title, isCompleted, handleRemoveItem, handleEditItem } = props;

  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [editedTitle, setEditedTitle] = React.useState<string>(title);

  const handleEdit = () => {
    if (!editedTitle) return;
    if (isEdit) handleEditItem(id, editedTitle, isCompleted);
    setIsEdit(!isEdit);
  };

  const handleComplete = () => {
    handleEditItem(id, title, !isCompleted);
  };

  return (
    <li className={styles.todoItem}>
      <input checked={isCompleted} onChange={() => handleComplete()} type="checkbox" className={styles.checkbox} />

      {isEdit ? (
        <Input value={editedTitle} onChange={setEditedTitle} onEnterPress={handleEdit} />
      ) : (
        <div className={`${styles.title} ${isCompleted ? styles.completed : ""}`}>{title}</div>
      )}

      <button disabled={isCompleted} onClick={() => handleEdit()} className={styles.iconButton}>
        {isEdit ? <DoneIcon /> : <EditIcon />}
      </button>

      <button onClick={() => handleRemoveItem(id)} className={styles.iconButton}>
        <DeleteIcon />
      </button>
    </li>
  );
}
