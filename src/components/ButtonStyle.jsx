import React from "react";

export const ButtonStyle = ({text}) => {
  return (
    <div className="text-center md:text-left mt-16 ">
      <a
        className="bg-violet-400 p-2 rounded-md text-xl md:mt-9 px-7 hover:bg-purple-400 shadow-xl text-white"
        href="https://drive.google.com/file/d/1Fte7Etkgx9hbmhlZlYlFqzAgL2ZBE872/view?usp=drive_link"
        target="_blank"
      >
        {text}
      </a>
    </div>
  );
};
