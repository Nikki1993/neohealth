import { FC, MouseEvent } from "react";
import { Button, Color } from "@components/Button";
import { Menu } from "@components/Menu";
import { Logo } from "@components/Logo";

export const Navigation: FC<{}> = () => {
  const onLanguageChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative pt-6 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="relative flex items-center justify-between">
          <Logo />
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
