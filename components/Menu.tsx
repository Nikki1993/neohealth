import { FC, MouseEvent, useState } from "react";
import { Transition } from "@headlessui/react";

import { Button, Color } from "@components/Button";
import { MenuItems } from "@components/MenuItems";
import { Logo } from "@components/Logo";

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
        <div className="rounded-lg -m-2 p-2 shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="flex items-center justify-between">
            <Logo />
            <Button accessibilityString="Close Menu" onClick={onClose}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
          <MenuItems isHidden={false} orientation="vertical" />
        </div>
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
