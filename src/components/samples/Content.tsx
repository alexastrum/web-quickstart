"use client";

import React from "react";
import HelloButton from "./HelloButton";

const Content: React.FC = () => {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <p
          className={`motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md`}
          key={index}
        >
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
