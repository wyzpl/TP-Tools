import Header from "@/components/layout/Header";

export default function BasiceLayout({ children }) {
  return (
    <main>
      {/* 头部导航 */}
      <Header />
      <div>{children}</div>
    </main>
  );
}
