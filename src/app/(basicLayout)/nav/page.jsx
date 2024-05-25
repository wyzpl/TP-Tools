"use client";
import NavCard from "@/components/NavCard";
import { useEffect, useState } from "react";

export default function NavListPage() {
  const [navList, setNavList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/navs");
        if (response.ok) {
          const data = await response.json();
          /* TODO: 处理拼装逻辑还能简化  */
          //  获取去重后的 group
          const groupData = [...new Set(data.map((item) => item.group))];
          //   按group 分组
          const newData = groupData.map((group) => {
            return data
              .filter((item) => item.group === group)
              .map((item) => {
                return {
                  group: item.group,
                };
              });
          });

          setNavList(newData);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {navList.map((card, i) => {
        return (
          <section key={i}>
            <div className="text-3xl font-bold my-6 ">{card[0].group}</div>
            {/* <NavCard key={i} card={card} /> */}
            <div className="flex flex-wrap gap-10">
              {card.map((item, index) => {
                return <NavCard key={index} card={item} />;
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
