import { constStateRedux } from "@/utils/constReduxState";
import Image from "next/image";
import React from "react";

export const Skills = () => {
  //state redux
  const mode = constStateRedux();
  const skillsData = [
    {
      imageUri: "/assets/skills/react.jpg",
      text: "React js / React native",
    },
    {
      imageUri: "/assets/skills/node.jpg",
      text: "Node js / Express js",
    },
    {
      imageUri: "/assets/skills/next.jpg",
      text: "Next js",
    },
    {
      imageUri: "/assets/skills/tailwind.jpg",
      text: "Tailwind js",
    },
    {
      imageUri: "/assets/skills/spring_boot.jpg",
      text: "Java / Spring Boot",
    },
  ];

  return (
    <div className="pt-20 lg:pt-16">
      <h1
        className={`text-lg text-center rounded-md   md:text-2xl font-bold ${
          mode ? "text-white" : "text-zinc-900"
        } `}
      >
        Habilidades
      </h1>
      <div className="justify-center  grid grid-cols-2 text-zinc-900  md:grid-cols-5 md:ml-16 py-20 lg:py-24">
        {skillsData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-7 justify-center   items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <Image
                className="rounded-full w-12 h-12 lg:w-20 lg:h-20"
                src={data.imageUri}
                width={80}
                height={80}
                alt={data.text}
              ></Image>
              <p
              style={{fontFamily:"'Hind Madurai' ,sans-serif" }}
                className={`text-center pb-10 lg:pb-0 opacity-90 ${
                  mode ? "text-white" : "text-zinc-900"
                }`}
              >
                {data.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
