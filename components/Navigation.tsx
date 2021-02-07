import { FC, MouseEvent } from "react";
import { Button, Color } from "@components/Button";
import { Menu } from "@components/Menu";

export const Navigation: FC<{}> = () => {
  const onLanguageChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative p-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="relative flex items-center justify-between">
          <h5 className="logo text-xl">
            <span className="block text-indigo-600 inline">Neo</span>
            <span className="block inline">Health</span>
          </h5>
          <Menu />
          <Button
            accessibilityString="Change Language"
            className="hidden md:block"
            color={Color.Secondary}
            onClick={onLanguageChange}
          >
            <span>Language</span>
          </Button>
        </nav>
      </div>
    </div>
  );
};
