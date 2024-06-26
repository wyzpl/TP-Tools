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
  title: "植树 DEV",
  description: "Online Tree Planting Dev",
};

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body>
        {/* 头部导航 */}
        {/* <Header /> */}
        <div>{children}</div>
      </body>
    </html>
  );
}
