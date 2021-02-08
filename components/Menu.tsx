import { FC, MouseEvent, useState } from "react";
import { Transition } from "@headlessui/react";

import { Button } from "@components/Button";
import { MenuItems } from "@components/MenuItems";
import { Logo } from "@components/Logo";
import { Paper } from "@components/Paper";
import { CloseIcon } from "@components/svg/Close";

interface MenuProps {}

export const Menu: FC<MenuProps> = () => {
  const [isOpen, setState] = useState(false);

  const onOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setState(true);
  };

  const onClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setState(false);
  };

  return (
    <>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute top-0 inset-x-0 transition transform origin-top-right"
      >
        <Paper>
          <div className="flex items-center justify-between">
            <Logo />
            <Button accessibilityString="Close Menu" onClick={onClose}>
              <CloseIcon />
            </Button>
          </div>
          <MenuItems isHidden={false} orientation="vertical" />
        </Paper>
      </Transition>
      <MenuItems />
      <Button
        accessibilityString="Open Main Menu"
        className="md:hidden"
        onClick={onOpen}
      >
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
    </>
  );
};
