"use client";
import NavCard from "./NavCard";

export default function NavCards() {
  const cards = [
    {
      group: "React",
      children: [
        {
          name: "NEXT.JS",
          link: "https://nextjs.org/",
          logo: "https://cdn.docschina.org/home/logo/nextjs.png",
          desc: "Next.js是一个全栈的React框架。",
        },
        {
          name: "React",
          link: "https://react.dev/",
          logo: "https://cdn.docschina.org/home/logo/react.svg",
          desc: "React是用于web和本地用户界面的库。用JavaScript编写的称为组件的单独部分构建用户界面。React旨在让您无缝地组合由独立人员、团队和组织编写的组件。",
        },
      ],
    },
    {
      group: "Vue",
      children: [
        {
          name: "Vue 3 中文文档",
          link: "https://cn.vuejs.org/",
          logo: "	https://cdn.docschina.org/home/logo/vue.svg",
          desc: "Vue.js - 渐进式的 JavaScript 框架",
        },
      ],
    },
    {
      group: "UI",
      children: [
        {
          name: "Tailwind UI",
          link: "https://tailwindui.com/",
          logo: "https://tailwindui.com/favicon.ico",
          group: "UI",
          desc: "Tailwind CSS的创建者提供了漂亮的UI组件和模板。",
        },
      ],
    },
  ];

  return (
    <>
      {cards.map((card, i) => {
        return (
          <section key={i}>
            <div className="text-3xl font-bold my-6 ">{card.group}</div>
            <div className="flex flex-wrap gap-10">
              {card.children.map((item, index) => {
                return <NavCard key={index} card={item} />;
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
