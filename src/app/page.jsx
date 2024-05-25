"use client";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["每日瞎忙活，练练代码，学习新技术，接触一些新的领域，不断的在此项目中进行扩展&nbsp;"],
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
          <h2 className="text-4xl lg:text-5xl mt-2 md:mt-0"> 随便写写 纯瞎忙活</h2>
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
            <Link href="/nav"> &nbsp;开始使用</Link>
          </button>
        </section>
      </div>
    </main>
  );
};

export default Home;
