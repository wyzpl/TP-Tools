import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function NavLayout({ children }) {
  return (
    <div className="flex px-6 py-10">
      {/* 侧边栏 */}
      <Sidebar />
      {/* 主体 */}
      <div className="px-6">{children}</div>
    </div>
  );
}
