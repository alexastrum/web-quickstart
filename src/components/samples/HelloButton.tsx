"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { actions } from "astro:actions";

interface Props {
  name?: string;
}

const HelloButton: React.FC<Props> = ({ name = "unknown" }) => {
  const handleClick = async () => {
    console.log("getGreeting clicked");
    const { data, error } = await actions.getGreeting({ name });
    if (error) console.error("getGreeting error", error);
    if (data) console.log("getGreeting data", data);
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
