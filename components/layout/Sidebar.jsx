import Link from "next/link";
import Image from "next/image";
import SidebarMenuList from "./SidebarMenuList";

export default function Sidebar() {
  const menuList = [
    {
      name: "VUE",
      link: "/",
      children: [
        { name: "Home1", link: "/" },
        { name: "Home2", link: "/" },
        { name: "Home3", link: "/" },
        { name: "Home4", link: "/" },
        { name: "Home5", link: "/" },
      ],
    },
  ];
  return (
    <>
      <section className="">
        {/* <Link href={"/"}>
          <Image className="logo" src="/logo.png" width="100" height="100" alt="Logo" />
        </Link> */}
        {/* Menu List */}
        <nav>
          <SidebarMenuList menus={menuList} />
        </nav>
      </section>
    </>
  );
}
