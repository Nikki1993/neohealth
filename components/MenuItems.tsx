import { FC } from "react";

interface MenuItemsProps {
  isHidden?: boolean;
  orientation?: "vertical" | "horizontal";
}

export const MenuItems: FC<MenuItemsProps> = ({
  isHidden = true,
  orientation = "horizontal",
}) => {
  return (
    <div
      className={`${isHidden ? "hidden" : "flex"} md:flex ${
        orientation === "horizontal" ? "flex-row" : "flex-col"
      } md:space-x-10`}
    >
      <span className="font-medium pb-1 text-gray-500 hover:text-gray-900">
        Services
      </span>
      <span className="font-medium pb-1 text-gray-500 hover:text-gray-900">
        Brands
      </span>
      <span className="font-medium pb-1 text-gray-500 hover:text-gray-900">
        About
      </span>
      <span className="font-medium pb-1 text-gray-500 hover:text-gray-900">
        Contact
      </span>
    </div>
  );
};
