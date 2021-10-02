import React from "react";
import styles from "./input.module.scss";

interface InputProps {
  /** Значение */
  value: string;
  /** Коллбэк, вызывающийся при вводе */
  onChange: (value: string) => void;
  /** Коллбэк, вызывающийся при нажатии кнопки Enter */
  onEnterPress: () => void;
  /** Плейсхолдер */
  placeholder?: string;
}

export function Input(props: InputProps) {
  const { value, onChange, onEnterPress, placeholder } = props;

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnterPress();
    }
  };

  return (
    <input
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
      onKeyPress={handleKeyPress}
      className={styles.input}
      placeholder={placeholder}
    />
  );
}
