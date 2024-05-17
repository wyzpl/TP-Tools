import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import "./globals.css";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Tree Planting",
  description: "Online Tree Planting Tools",
};

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body>
        {/* 头部导航 */}
        <Header />
        <div className="flex px-6 py-10">
          {/* 侧边栏 */}
          <Sidebar />
          {/* 主体 */}
          <div className="px-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
