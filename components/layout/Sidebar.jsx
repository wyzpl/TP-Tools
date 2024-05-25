"use client";
import React from "react";
import { AppstoreOutlined, MailOutlined, AndroidOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu, ConfigProvider } from "antd";
const items = [
  {
    key: "sub1",
    label: "Navigation Email",
    icon: <MailOutlined />,
  },
  {
    key: "sub2",
    label: "Navigation Android",
    icon: <AndroidOutlined />,
  },
  {
    key: "sub3",
    label: "Navigation Appstore",
    icon: <AppstoreOutlined />,
  },
  {
    key: "sub4",
    label: "Navigation Setting",
    icon: <SettingOutlined />,
  },
];
const SidebarPage = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedColor: "#9333EA",
            itemSelectedBg: "#F3E8FF",
            itemHoverColor: "#9333EA",
            itemHoverBg: "#F3E8FF",
            itemActiveBg: "#F3E8FF",
          },
        },
      }}
    >
      <Menu
        onClick={onClick}
        className="w-64 py-5 min-h-[calc(100vh-4rem)]"
        defaultSelectedKeys={["sub1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </ConfigProvider>
  );
};
export default SidebarPage;
