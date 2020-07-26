import React from "react";
import { Props } from "./TextMessage.types";

const TextMessage: React.FC<Props> = ({ message }) => {
  return <p>{message}</p>;
};

export default TextMessage;
