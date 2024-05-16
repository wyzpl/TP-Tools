import Header from "./Header";
import Sidebar from "./Sidebar";

export default function LayoutPage({ children }) {
  return (
    <>
      <main>
        {/* 头部导航 */}
        <Header />
        <div className="container mx-auto">
          {/* 菜单栏 */}
          <Sidebar />
          {children}
        </div>
      </main>
    </>
  );
}
