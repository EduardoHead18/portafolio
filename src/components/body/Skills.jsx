import React from "react";
import { useReduxState } from "@/custom/useReduxState";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiHibernate } from "react-icons/si";
import { SiSpringsecurity } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiMongodb, SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaSwift, FaHtml5,FaCss3Alt,FaLinux } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
export const Skills = () => {
  //state redux
  const mode = useReduxState();
  const skillsData = [
    {
      icon: (
        <FaJava size={60} color="rgb(147 51 234 / var(--tw-text-opacity));" />
      ),
      text: "Java",
    },
    {
      icon: (
        <BiLogoSpringBoot
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "Spring Boot",
    },
    {
      icon: (
        <SiHibernate
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "Hibernate",
    },
    {
      icon: (
        <SiSpringsecurity
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "Spring Security",
    },
    {
      icon: (
        <IoLogoDocker
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "Docker",
    },
    {
      icon: (
        <FaHtml5
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "Html",
    },
    {
      icon: (
        <FaCss3Alt
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "CSS",
    },
    {
      icon: (
        <SiJavascript
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "JavaScript",
    },
    {
      icon: (
        <SiTypescript
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "TypeScript",
    },
    {
      icon: (
        <TbBrandReactNative
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "React Js / React Native",
    },
    {
      icon: (
        <SiNextdotjs
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "Next Js",
    },
    {
      icon: (
        <SiTailwindcss
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "Tailwind css",
    },
    {
      icon: (
        <BiLogoPostgresql
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "PostgreSQL",
    },
    {
      icon: (
        <GrMysql size={60} color="rgb(147 51 234 / var(--tw-text-opacity));" />
      ),
      text: "Mysql",
    },
    {
      icon: (
        <SiMongodb
          size={60}
          color="rgb(147 51 234 / var(--tw-text-opacity));"
        />
      ),
      text: "Mongo DB",
    },
    {
      icon: (
        <FaGithub size={60} color="rgb(147 51 234 / var(--tw-text-opacity));" />
      ),
      text: "GitHub",
    },
    {
      icon: (
        <FaSwift size={60} color="rgb(147 51 234 / var(--tw-text-opacity));" />
      ),
      text: "Swift UI",
    },
    {
      icon: (
        <SiPostman size={60} color="rgb(147 51 234 / var(--tw-text-opacity));" />
      ),
      text: "Postman",
    },
    {
      icon: (
        <DiScrum size={60} color="rgb(147 51 234 / var(--tw-text-opacity));" />
      ),
      text: "Scrum",
    },
    {
      icon: (
        <FaLinux size={60} color="rgb(147 51 234 / var(--tw-text-opacity));" />
      ),
      text: "Linux",
    },
    
  ];

  return (
    <div className="">
      <h1
        className={`text-lg rounded-md   md:text-2xl font-bold mt-20  mb-20 ${
          mode ? "text-white" : "text-zinc-900"
        } `}
      >
        <span style={{ marginRight: "0.8rem" }}>🔨 </span> Skills & Tools
      </h1>
      <div className="justify-center  grid grid-cols-2 gap-8  text-zinc-900  md:grid-cols-5 md:ml-16 ">
        {skillsData.map((data, index) => {
          const IconComponent = data.icon;
          return (
            <div
              key={index}
              className="flex flex-col gap-7 justify-center items-center"
            >
              {IconComponent}
              <p
                style={{ fontFamily: "'Hind Madurai' ,sans-serif" }}
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
