export default function SidebarMenuList({ menus }) {
  return (
    <>
      <ul>
        {menus.map((menu, index) => {
          return (
            <>
              <li className="py-2 my-1 bg-gray-300 hover:bg-orange-400 cursor-pointer">{menu.name}</li>
            </>
          );
        })}
      </ul>
    </>
  );
}
