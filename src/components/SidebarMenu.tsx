import React, { useState } from "react";
import { SidebarMenuCard, SidebarMenuItem } from "../types/types";
import { BiMenu } from "react-icons/bi";
import classNames from "../utils/clases";
import SidebarMenuCardView from "./SidebarMenuCardView";
import SidebarMenuItemView from "./SidebarMenuItemView";
import '../styles/SidebarMenu.scss';

// es recomendable tener una interfaz que nos permita definir nuestras props
interface SidebarMenuProps {
  items: SidebarMenuItem[];
  card: SidebarMenuCard;
}

export default function SidebarMenu({ items, card }: SidebarMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={classNames("SidebarMenu", isOpen ? "expanded" : "collapsed")}
    >
      <div className="menuButton">
        <button className="hamburguerButton" onClick={handleClick}>
          <BiMenu />
        </button>
      </div>
      <SidebarMenuCardView card={card} isOpen={isOpen} />
      {items.map((item) => (
        <SidebarMenuItemView key={item.id} item={item} isOpen={isOpen} />
      ))}
    </div>
  );
}


