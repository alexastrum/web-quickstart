"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HelloButton: React.FC = () => {
  const handleClick = () => {
    console.log("Hello");
  };

  return (
    <Button className="group" onClick={handleClick}>
      <span className="transition transform-gpu group-active:translate-x-0.5 group-active:translate-y-0.5">
        Click Me!
      </span>
    </Button>
  );
};

export default HelloButton;
