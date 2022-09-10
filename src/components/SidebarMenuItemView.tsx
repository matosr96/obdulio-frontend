import React from "react";
import { SidebarMenuItem } from "../types/types";
import classNames from "../utils/clases";
import "../styles/SidebarMenuItemView.scss";

interface SidebarMenuItemViewProps {
  item: SidebarMenuItem;
  isOpen: boolean;
}
export default function SidebarMenuItemView({
  item,
  isOpen,
}: SidebarMenuItemViewProps) {
  return (
    <div className="SidebarMenuItemView">
      <a href={item.url}>
        <div className={classNames("ItemContent", isOpen ? "" : "collapsed")}>
          <div className="icon">
            <item.icon size="32" />
          </div>
          <span className="label">{item.label}</span>
        </div>
      </a>
      {!isOpen ? <div className="tooltip">{item.label}</div> : ""}
    </div>
  );
}
