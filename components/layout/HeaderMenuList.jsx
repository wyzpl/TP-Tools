"use client";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

export default function HeaderMenuList({ menuItems, onMenuClick }) {
  return (
    <ul className="flex lg:gap-x-12">
      {menuItems.map((item, index) => (
        <li key={index} onClick={() => onMenuClick(index)} className="relative">
          <Link href={item.href} target={item.external ? "_blank" : "_self"}>
            <div className={classNames({ "text-purple-600 font-bold": item.isActive }, "text-sm leading-6 text-gray-500")}>{item.name}</div>
            {item.external && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-2 h-2 absolute top-2 -right-2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
