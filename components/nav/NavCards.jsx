"use client";
import NavCard from "./NavCard";

export default function NavCards() {
  const cards = [
    {
      name: "NEXT.JS",
      link: "https://nextjs.org/",
      logo: "https://cdn.docschina.org/home/logo/nextjs.png",
      title: "Next.js by Vercel - The React Framework",
      desc: "Next.js by Vercel is the full-stack React framework for the web.",
    },
    {
      name: "Vue 3 中文文档",
      link: "https://cn.vuejs.org/",
      logo: "	https://cdn.docschina.org/home/logo/vue.svg",
      title: "Vue.js",
      desc: "Vue.js - 渐进式的 JavaScript 框架",
    },
    {
      name: "React",
      link: "https://react.dev/",
      logo: "	https://cdn.docschina.org/home/logo/react.svg",
      title: "React",
      desc: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly combine components written by independent people, teams, and organizations.",
    },
  ];

  return (
    <div className="flex flex-wrap gap-10">
      {cards.map((card, i) => {
        return <NavCard key={i} card={card} />;
      })}
    </div>
  );
}
