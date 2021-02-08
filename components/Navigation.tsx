import { FC, MouseEvent, useCallback, useState } from "react";
import { Transition } from "@headlessui/react";

import { Button, Color } from "@components/Button";
import { Menu } from "@components/Menu";
import { Logo } from "@components/Logo";
import { LanguagePicker } from "@components/LanguagePicker";
import { Paper, PaperLevel } from "@components/Paper";
import { CloseIcon } from "@components/svg/Close";

export const Navigation: FC<{}> = () => {
  const [isOpen, setOpen] = useState(false);

  const onLanguageOpen = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(true);
  }, []);

  const onLanguageClose = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(false);
  }, []);

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
            onClick={onLanguageOpen}
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
            className="absolute top-0 right-0 transition transform origin-top-left"
          >
            <Paper className="flex flex-row justify-start w-28">
              <LanguagePicker />
              <Paper
                level={PaperLevel.zero}
                className="absolute -top-4 -right-4 w-10 h-10 flex justify-center"
              >
                <Button
                  className="w-full h-full flex justify-center"
                  color={Color.Danger}
                  hasPadding={false}
                  accessibilityString="Close Language Selection"
                  onClick={onLanguageClose}
                >
                  <CloseIcon />
                </Button>
              </Paper>
            </Paper>
          </Transition>
        </nav>
      </div>
    </div>
  );
};
