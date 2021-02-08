import { FC } from "react";

interface LanguagePickerProps {
  orientation?: "vertical" | "horizontal";
}

export const LanguagePicker: FC<LanguagePickerProps> = ({
  orientation = "vertical",
}) => {
  return (
    <div className="flex flex-col justify-between">
      <span>FI</span>
      <span>EN</span>
      <span>RU</span>
    </div>
  );
};
