import { FC, MouseEvent, useState } from "react";
import { Transition } from "@headlessui/react";

import { Button, Color } from "@components/Button";
import { Menu } from "@components/Menu";
import { Logo } from "@components/Logo";
import { LanguagePicker } from "@components/LanguagePicker";

export const Navigation: FC<{}> = () => {
  const [isOpen, setOpen] = useState(false);
  const onLanguageChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(true);
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
          <Transition
            show={isOpen}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <LanguagePicker />
          </Transition>
        </nav>
      </div>
    </div>
  );
};
