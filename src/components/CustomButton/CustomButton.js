import React from "react";
import "./CustomButton.css";
import "./CustomButton.less";

const CustomButton = props => {
  const { text } = props;

  return <button className="css less">{text}</button>;
};

export default CustomButton;
