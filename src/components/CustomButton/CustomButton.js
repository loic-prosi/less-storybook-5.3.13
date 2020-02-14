import React from "react";

const CustomButton = props => {
  const { text } = props;

  return <button className="custom-button">{text}</button>;
};

export default CustomButton;
