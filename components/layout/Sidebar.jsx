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
    {
      name: "About",
      link: "/about",
      children: [
        { name: "Home22", link: "/" },
        { name: "Home32", link: "/" },
        { name: "Home56", link: "/" },
        { name: "Home32", link: "/" },
        { name: "Home55", link: "/" },
      ],
    },
    {
      name: "Contact",
      link: "/contact",
      children: [
        { name: "Home11", link: "/" },
        { name: "Home21", link: "/" },
        { name: "Home31", link: "/" },
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
