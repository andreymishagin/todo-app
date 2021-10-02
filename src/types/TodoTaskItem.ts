export interface TodoTaskItem {
  /** id задачи */
  id: number;
  /** Название задачи */
  title: string;
  /** Флаг завершенности */
  isCompleted: boolean;
}
