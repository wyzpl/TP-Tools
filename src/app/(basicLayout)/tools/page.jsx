import Layout from "@/components/layout";
import React from "react";
import { Input, Button } from "antd";
const Home = () => {
  return (
    <>
      <main className="flex justify-center items-center">
        <div className="bg-slate-300 w-96 h-96 mt-16">
          <form action="/">
            <Input size="large" placeholder="Basic usage" />
            <Button type="primary">Submit</Button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
