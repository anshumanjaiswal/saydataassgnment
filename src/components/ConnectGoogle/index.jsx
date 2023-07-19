import React from "react";

import { Img, Text } from "components";

const ConnectGoogle = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="common-pointer absolute flex flex-col gap-3 h-max inset-[0] items-start justify-start m-auto w-auto"
          onClick={props?.onClick}
        >
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtSatoshiMedium18"
            >
              Connect your Google calendar
            </Text>
            <Text
              className="leading-[18.00px] max-w-[270px] md:max-w-full text-blue_gray-900 text-sm"
              size="txtSatoshiRegular14"
            >
              Sync your google calendar for seamless event transcriptions.
            </Text>
          </div>
          <Img
            className="h-[41px] w-[41px]"
            src="images/img_google.svg"
            alt="google"
          />
        </div>
        <Img
          className="absolute bottom-[8%] h-6 right-[8%] w-6"
          src="images/img_floatingicon.svg"
          alt="floatingicon"
        />
      </div>
    </>
  );
};

ConnectGoogle.defaultProps = {};

export default ConnectGoogle;
