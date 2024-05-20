"use client";
import { useState } from "react";

export default function SidebarMenuList({ menus }) {
  const [menuIndex, setMenuIndex] = useState(0);

  const handleClickMenu = (index) => {
    setMenuIndex(index);
  };
  return (
    <>
      {menus.map((menu, index) => {
        return (
          <ul className="min-w-52" key={index}>
            {/* 一级菜单 */}
            <li className="p-2  cursor-pointer" onClick={() => handleClickMenu(index)}>
              <div className="text-black font-bold">{menu.name}</div>
              {/* 子菜单 */}
              <ul className="overflow-hidden transition  duration-200" style={{ height: menuIndex == index ? "auto" : 0 }}>
                {menu.children.map((child, i) => {
                  return (
                    <li key={i} className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                      {child.name}
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        );
      })}
    </>
  );
}
