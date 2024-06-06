"use client";
import React from "react";
import Image from "next/image";
import { Button, Checkbox, Form, Input } from "antd";

export default function LoginPage() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center  text-center">
        <div className="flex items-center">
          <div className="bg-gray-400 h-screen flex flex-col justify-center">
            <Image width={500} height={500} src="/logo.png" alt="logo" />
          </div>
          <div className=" flex-1 max-w-xl m-auto">
            <h2 className="mb-10 text-4xl font-bold">Log In</h2>
            <Form
              name="basic"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 2,
                  span: 10,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" className="w-full">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
}
