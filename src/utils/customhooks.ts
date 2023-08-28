import { useState } from "react";

export const useToggle = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((prev) => !prev);
  };
  return [show, toggle];
};
export type menuItems = {
  label: string;
  to: string;
  active: boolean;
  icon?: React.ReactElement;
  children?:{label: string, to: string, active: boolean}[]
};

export const toggleActiveMenu = (items: menuItems[]) => {
  const [menu, setMenu] = useState<menuItems[]>(items);
  const toggleId = (keyId: string) => {
    setMenu((prev) => {
      const udpatedItems = prev?.map((each) => {
        if (each.label == keyId) {
          return { ...each, active: !each.active };
        }
        return each;
      });
      const items = udpatedItems.map((remove) => {
        if (keyId !== remove.label) {
          return { ...remove, active: false };
        }
        return remove;
      });
      console.log(udpatedItems);
      return items;
    });
  };
  return [menu, toggleId];
};
