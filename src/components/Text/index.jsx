import React from "react";

const sizeClasses = {
  txtGeneralSansSemibold20: "font-generalsans font-semibold",
  txtGeneralSansSemibold32: "font-generalsans font-semibold",
  txtSatoshiRegular12OrangeA700: "font-normal font-satoshi",
  txtGeneralSansSemibold24: "font-generalsans font-semibold",
  txtGeneralSansRegular16OrangeA700: "font-generalsans font-normal",
  txtSatoshiRegular14: "font-normal font-satoshi",
  txtSatoshiMedium16: "font-medium font-satoshi",
  txtSatoshiRegular16: "font-normal font-satoshi",
  txtSatoshiMedium18: "font-medium font-satoshi",
  txtSatoshiRegular12: "font-normal font-satoshi",
  txtGeneralSansRegular16: "font-generalsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
