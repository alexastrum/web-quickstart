import React from "react";
import { Button } from "@/components/ui/button";

const HelloButton: React.FC = () => {
  const handleClick = () => {
    console.log("Hello");
  };

  return <Button onClick={handleClick}>Click Me!</Button>;
};

export default HelloButton;
