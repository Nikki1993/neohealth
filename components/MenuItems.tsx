import { FC } from "react";

interface MenuItemsProps {}

export const MenuItems: FC<MenuItemsProps> = () => {
  return (
    <div className="hidden md:flex md:space-x-10">
      <span className="font-medium text-gray-500 hover:text-gray-900">
        Services
      </span>
      <span className="font-medium text-gray-500 hover:text-gray-900">
        Brands
      </span>
      <span className="font-medium text-gray-500 hover:text-gray-900">
        About
      </span>
      <span className="font-medium text-gray-500 hover:text-gray-900">
        Contact
      </span>
    </div>
  );
};
