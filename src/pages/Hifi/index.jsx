import React from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
// import { registerDeviceAuth } from "service/api";

import { Button, Img, Input, List, Text } from "components";
import ConnectGoogle from "components/ConnectGoogle";
import Hh from "components/Hh";
import Sidebar1 from "components/Sidebar1";
import { CloseSVG } from "../../assets/images";

const HifiPage = () => {
  const [register, setRegister] = React.useState();

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

  // function columngoogle(data) {
  //   const req = { data: { name: data?.name } };

  //   registerDeviceAuth(req)
  //     .then((res) => {
  //       setRegister(res?.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-generalsans items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start md:px-5 w-[94%] md:w-full">
          <Sidebar1 className="!sticky !w-[284px] bg-blue_gray-900 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGeneralSansSemibold32"
            >
              Dashboard
            </Text>
            <Input
              name="search"
              placeholder="Search your transcriptions"
              className="font-satoshi p-0 placeholder:text-blue_gray-900 sm:pr-5 text-base text-blue_gray-900 text-left w-full"
              wrapClassName="bg-white-A700 border border-orange-A700 border-solid flex md:ml-[0] ml-[106px] mt-7 pb-[7px] pl-3 pr-[35px] pt-2.5 rounded-[20px] shadow-bs1 w-4/5"
              prefix={
                <Img
                  className="mt-px mb-1 cursor-pointer h-4 mr-6"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#333333"
                  className="cursor-pointer h-4 my-auto"
                  onClick={() => [Object]("")}
                  style={{ visibility: "hidden" }}
                  height={16}
                  width={16}
                  viewBox="0 0 16 16"
                />
              }
            ></Input>
            <div className="flex flex-col font-satoshi items-center justify-start mt-10 w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[22px] sm:px-5 rounded-[20px] shadow-bs w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[61%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[46%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtGeneralSansSemibold24"
                    >
                      Start New Transcription
                    </Text>
                    <Text
                      className="mt-[69px] text-base text-blue_gray-900"
                      size="txtSatoshiMedium16"
                    >
                      Select Transcription language
                    </Text>
                    <Input
                      name="language"
                      placeholder="English (U.K.)"
                      className="font-satoshi p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                      wrapClassName="border border-gray-600 border-solid flex mt-1 pt-1 px-2.5 rounded-[5px] w-auto"
                      suffix={
                        <div className="mt-1 mb-2 ml-3 sm:w-full sm:mx-0 w-[5%] border-blue_gray-900_01 border border-solid">
                          <Img
                            className="my-auto"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                    <Img
                      className="h-[38px]"
                      src="images/img_group1.svg"
                      alt="groupOne"
                    />
                    <Button className="bg-orange-A700 cursor-pointer font-bold min-w-[211px] mt-3 py-[9px] rounded-[5px] shadow-bs2 text-base text-center text-white-A700">
                      Upload Video/Audio File
                    </Button>
                    <Text
                      className="mt-2 text-blue_gray-900 text-xs"
                      size="txtSatoshiRegular12"
                    >
                      or insert Video/Audio link
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row font-satoshi gap-6 grid sm:grid-cols-1 grid-cols-2 mt-10 w-3/5"
              orientation="horizontal"
            >
              <ConnectGoogle className="bg-white-A700 md:h-[124px] h-[150px] p-3 relative rounded-[10px] shadow-bs w-full" />
              <ConnectGoogle className="bg-white-A700 md:h-[117px] h-[150px] p-3 relative rounded-[10px] shadow-bs w-full" />
            </List>
            <div className="flex flex-col font-generalsans items-center justify-start mt-[50px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtGeneralSansSemibold24"
                  >
                    Recents
                  </Text>
                  <div className="flex flex-row font-satoshi gap-[7.2px] items-center justify-start mt-1.5 w-auto">
                    <Img
                      className="h-[15px]"
                      src="images/img_filter.svg"
                      alt="filter"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtSatoshiMedium18"
                    >
                      Filter
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-satoshi items-center justify-start mt-[23px] w-full">
                  <List
                    className="flex flex-col gap-3 items-center w-full"
                    orientation="vertical"
                  >
                    <Hh className="hover:cursor-pointer flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start ml-[51px] mr-10 hover:my-0 my-0 hover:shadow-bs w-[92%] md:w-full" />
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-end hover:my-0 my-0 p-[7px] hover:shadow-bs shadow-bs w-full">
                      <Hh className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 w-[97%] md:w-full" />
                    </div>
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-end hover:my-0 my-0 p-[7px] hover:shadow-bs shadow-bs w-full">
                      <Hh className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 w-[97%] md:w-full" />
                    </div>
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-end hover:my-0 my-0 p-[7px] hover:shadow-bs shadow-bs w-full">
                      <Hh className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 w-[97%] md:w-full" />
                    </div>
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-end hover:my-0 my-0 p-[7px] hover:shadow-bs shadow-bs w-full">
                      <Hh className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 w-[97%] md:w-full" />
                    </div>
                  </List>
                </div>
                <div className="flex flex-row font-satoshi gap-2 items-center justify-start mt-3 w-auto">
                  <a
                    href="javascript:"
                    className="text-orange-A700 text-xs w-auto"
                  >
                    <Text size="txtSatoshiRegular12OrangeA700">View more</Text>
                  </a>
                  <Img
                    className="h-1.5 w-3"
                    src="images/img_arrowdown_orange_a700.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HifiPage;
