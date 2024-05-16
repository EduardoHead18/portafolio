import React from "react";

export const ButtonStyle = ({text, url}) => {
  return (
    <div className="text-center md:text-left mt-16 ">
      <a
        className="bg-violet-400 p-2 rounded-md text-xl md:mt-9 px-7 hover:bg-purple-400 shadow-xl text-white"
        href={url}
        target="_blank"
      >
        {text}
      </a>
    </div>
  );
};
