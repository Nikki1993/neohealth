import { FC, HTMLProps, MouseEvent } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  color: "primary" | "secondary" | "danger";
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({ color, onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
