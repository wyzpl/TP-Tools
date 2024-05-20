"use client";

export default function NavCard({ card }) {
  const handleClickOpen = () => {
    // 处理点击打开卡片时的逻辑
    window.open(card.link, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className="rounded-lg bg-gray-100 p-4 w-80 h-32 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-gray-200 transition-transform"
      onClick={handleClickOpen}
    >
      <div className="flex items-center  gap-2">
        <img src={card.logo} width="48px" height="48px" alt="logo" />
        <div className="font-bold text-xl">{card.name}</div>
      </div>
      <div className="mt-2 text-sm text-gray-500 line-clamp-2">{card.desc}</div>
    </div>
  );
}
