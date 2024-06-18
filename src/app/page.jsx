"use client";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["基于Next.js + TailWind + OpenAI&nbsp;边学边练&nbsp;不断开发&nbsp;不断优化&nbsp;"],
      typeSpeed: 100,
      backSpeed: 0,
      cursorChar: "_",
      shuffle: true,
      smartBackspace: false,
      loop: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-center text-center">
      <div className="text-secondary-foreground fixed top-0 left-0 right-0 h-10 flex bg-background">
        <div className="flex-1 text-start p-2">
          <a className="blog w-30 overflow-hidden" href="/">
            <h1 className="font-bold text-xl bg-gray-100 w-[100px] flex">
              <span>&nbsp;植树&nbsp;</span>
              <span className="bg-purple-500 text-white text-lg">&nbsp;DEV&nbsp;</span>
            </h1>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center text-start md:text-center mx-6">
        <section className="md:flex md:justify-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold">植树 DEV , &nbsp;</h2>
          <h2 className="text-4xl lg:text-5xl mt-2 md:mt-0"> 积土成山 积水成渊</h2>
        </section>
        <p className="leading-7 mt-6 text-lg">
          <span ref={el} aria-hidden="true"></span>
        </p>
        <section className="mt-12 flex justify-center space-x-4">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-purple-500 text-white hover:bg-purple-500/90 hover:scale-105 h-11 rounded-md px-8 text-lg"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R1qula:"
            data-state="closed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-zap h-4 w-4"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            <Link href="/"> &nbsp;敬请期待</Link>
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 hover:scale-105 h-11 rounded-md px-8 text-lg"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R1qula:"
            data-state="closed"
          >
            <svg width="24" strokeWidth="2" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path
                d="M5 19.5V5C5 3.89543 5.89543 3 7 3H18.4C18.7314 3 19 3.26863 19 3.6V21"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path d="M9 7L15 7" stroke="#FFF" strokeWidth="2" strokeLinecap="round"></path>
              <path d="M6.5 15L19 15" stroke="#FFF" strokeWidth="2" strokeLinecap="round"></path>
              <path d="M6.5 18L19 18" stroke="#FFF" strokeWidth="2" strokeLinecap="round"></path>
              <path d="M6.5 21L19 21" stroke="#FFF" strokeWidth="2" strokeLinecap="round"></path>
              <path
                d="M6.5 18C5.5 18 5 17.3284 5 16.5C5 15.6716 5.5 15 6.5 15"
                stroke="#FFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6.5 21C5.5 21 5 20.3284 5 19.5C5 18.6716 5.5 18 6.5 18"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <Link href="https://blog.zhishujihua.cn/" target="_blank">
              {" "}
              &nbsp;博客
            </Link>
          </button>
        </section>
      </div>
    </main>
  );
};

export default Home;
