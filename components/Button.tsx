import { FC, HTMLProps, MouseEvent } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
  accessibilityString: string;
  color?: Color;
  hasPadding?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export enum Color {
  Primary = "text-indigo-600 bg-white shadow",
  Secondary = "text-white bg-indigo-600 shadow",
  Danger = "text-white bg-red-600 shadow",
}

export const Button: FC<ButtonProps> = ({
  color = "",
  onClick,
  children,
  accessibilityString,
  hasPadding = true,
  className = "",
}) => {
  return (
    <button
      className={`items-center ${
        hasPadding && "px-4 py-2"
      } border border-transparent text-base font-medium rounded-md ${color} ${className}`.trim()}
      onClick={onClick}
    >
      <span className="sr-only">{accessibilityString}</span>
      {children}
    </button>
  );
};
