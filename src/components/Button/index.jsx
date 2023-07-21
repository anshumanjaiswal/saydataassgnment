import React, { useState } from 'react';
import PropTypes from "prop-types";


const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(URL.createObjectURL(file));
  };

  return (
    <div>
      <button className={`${className}`} {...restProps}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
       {selectedVideo && (
        <video width="400" controls>
          <source src={selectedVideo} type="video/mp4" />
        </video>
      )}
      
      </button>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {Button};
