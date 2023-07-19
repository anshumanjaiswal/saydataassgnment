import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: <Img className="h-[22px]" src="images/img_home.svg" alt="home" />,
      label: "Dashboard",
    },
    {
      icon: (
        <Img className="h-5 w-5" src="images/img_calendar.svg" alt="calendar" />
      ),
      label: "Calendar",
    },
    {
      icon: (
        <Img className="h-5 w-5" src="images/img_folder.svg" alt="folder" />
      ),
      label: "Folders",
    },
    {
      icon: (
        <Img className="h-[18px] w-5" src="images/img_trash.svg" alt="trash" />
      ),
      label: "Trash",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="flex flex-row gap-3 items-center justify-start mt-[61px] mx-auto px-5 py-2.5 w-auto">
          <Img
            className="h-11 md:h-auto object-cover rounded-[5px] w-11"
            src="images/img_rectangle3954.png"
            alt="rectangle3954"
          />
          <div className="flex flex-col gap-2 items-start justify-center w-auto">
            <Text
              className="text-base text-white-A700 w-auto"
              size="txtGeneralSansRegular16"
            >
              Shekhar Kushwaha
            </Text>
            <Text
              className="text-base text-orange-A700 text-shadow-ts w-auto"
              size="txtGeneralSansRegular16OrangeA700"
            >
              Upgrade to Pro
            </Text>
          </div>
          <Img className="h-3 w-3" src="images/img_forward.svg" alt="forward" />
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: "10px 10px 10px 20px",
              gap: "12px",
              color: "#c2c2c2",
              "font-weight": 600,
              "font-size": "20px",
              "font-family": "General Sans",
              "border-radius": "5px",
              [`&:hover, &.ps-active`]: {
                color: "#ffffff",
                "background-color": "#ff6c0aff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[60px] mt-10 pt-2.5 px-3.5 w-[91%]"
        >
          <div className="flex flex-col gap-[23px] items-center justify-start w-full">
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <div className="flex flex-col items-center justify-start mt-[455px] pb-[38px] w-full">
            <MenuItem
              icon={
                <Img
                  className="h-5 w-5"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              }
            >
              <Text className="mb-0.5 w-auto">Settings</Text>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
