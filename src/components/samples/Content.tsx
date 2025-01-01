"use client";

import React from "react";
import HelloButton from "./HelloButton";

const Content: React.FC = () => {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <p className={`animate-in fade-in`} key={index}>
          {/* 100 lines of Lorem ipsum */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quisquam, quos. Amet
          consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quisquam, quos. Amet consectetur
          adipisicing elit.
        </p>
      ))}
      <p>
        <HelloButton />
      </p>
    </div>
  );
};

export default Content;
