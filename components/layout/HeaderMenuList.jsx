import Link from "next/link";

export default function HeaderMenuList({ menuItems }) {
  return (
    <ul className="flex lg:gap-x-12">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
            <div className="text-sm font-semibold leading-6 text-gray-900">{item.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
