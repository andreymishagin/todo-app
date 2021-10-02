import React from "react";
import styles from "./input.module.scss";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Input(props: InputProps) {
  const { value, onChange, placeholder } = props;
  return (
    <input
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
      className={styles.input}
      placeholder={placeholder}
    />
  );
}
