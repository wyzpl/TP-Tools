import Link from "next/link";
import Image from "next/image";
import SidebarMenuList from "./SidebarMenuList";

export default function Sidebar() {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <section className="max-w-60">
        <Link href={"/"}>
          <Image className="logo" src="/logo.png" width="100" height="100" alt="Logo" />
        </Link>
        {/* Menu List */}
        <nav>
          <SidebarMenuList menus={menuList} />
        </nav>
      </section>
    </>
  );
}
