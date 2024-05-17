import Link from "next/link";
import HeaderMenuList from "./HeaderMenuList";

export default function Header() {
  const menuList = [
    {
      name: "开发导航",
      href: "/nav",
    },
    {
      name: "工具箱",
      href: "/tools",
    },
    {
      name: "博客",
      href: "/blog",
    },
    {
      name: "社区",
      href: "#",
    },
    {
      name: "案例",
      href: "#",
    },
  ];

  return (
    <>
      <header className="w-full h-16 px-6 flex items-center justify-between sticky top-0 bg-white bg-opacity-80 backdrop-saturate-100 backdrop-blur-md lg:border-b lg\:border-slate-900\/10 lg\:border-b">
        <div className="flex items-center lg:gap-x-12">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold w-60">TREEPLANTING</h1>
          </Link>
          <nav>
            <HeaderMenuList menuItems={menuList} />
          </nav>
        </div>
        <div className="flex items-center lg:gap-x-6">
          <a href="">Github</a>
          <a href="">Gitee</a>
          <a href="">Twitter</a>
        </div>
      </header>
    </>
  );
}
