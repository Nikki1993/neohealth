import { FC, MouseEvent } from "react";
import Image from "next/image";
import { Button } from "@components/Button";

export const Navigation: FC<{}> = () => {
  const onMenuClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative p-6">
      <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
        <h5 className="logo text-xl">
          <span className="block text-indigo-600 inline">Neo</span>
          <span className="block inline">Health</span>
        </h5>
        <Button onClick={onMenuClick} color="secondary">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </nav>
    </div>
  );
};
