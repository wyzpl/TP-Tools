"use client";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

export default function HeaderMenuList({ menuItems, onMenuClick }) {
  return (
    <ul className="flex lg:gap-x-12">
      {menuItems.map((item, index) => (
        <li key={index} onClick={() => onMenuClick(index)}>
          <Link href={item.href}>
            <div className={classNames({ "text-gray-900": item.isActive }, "text-sm font-semibold leading-6 text-gray-500")}>
              {item.name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
