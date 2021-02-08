import { FC } from "react";

export enum PaperLevel {
  zero = "m-0 p-0",
  one = "-m-1 p-1",
  two = "-m-2 p-2",
}

interface PaperProps {
  className?: string;
  level?: PaperLevel;
}

export const Paper: FC<PaperProps> = ({
  children,
  level = PaperLevel.one,
  className = "",
}) => (
  <div
    className={`rounded-lg ${level} shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden ${className}`}
  >
    {children}
  </div>
);
