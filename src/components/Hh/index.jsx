import React from "react";

import { Text } from "components";

const Hh = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-base text-blue_gray-900"
          size="txtSatoshiRegular16"
        >
          Induction Seminar
        </Text>
        <Text
          className="md:ml-[0] ml-[456px] text-base text-blue_gray-900"
          size="txtSatoshiRegular16"
        >
          1 hr 20 min
        </Text>
        <Text
          className="ml-10 md:ml-[0] text-base text-blue_gray-900"
          size="txtSatoshiRegular16"
        >
          Shekhar Kushwaha
        </Text>
        <Text
          className="ml-10 md:ml-[0] text-base text-blue_gray-900"
          size="txtSatoshiRegular16"
        >
          20 march 2023
        </Text>
      </div>
    </>
  );
};

Hh.defaultProps = {};

export default Hh;
