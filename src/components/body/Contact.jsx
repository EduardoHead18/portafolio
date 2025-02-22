import Image from "next/image";
import React from "react";
import { useReduxState } from "@/custom/useReduxState";

export const Contact = () => {
  const mode = useReduxState();
  return (
    <div className="h-screen  flex flex-col justify-between">
      <h1
        className={`text-lg mt-28 text-center rounded-md  px-3 md:text-2xl font-semibold md:pt-20  ${
          mode ? "text-white" : "text-zinc-900"
        }`}
      >
        Stop beign a stranger and{" "}
        <span className="bg-red-400 text-white rounded-md p-2">
          contact me 😃
        </span>{" "}
      </h1>

      <h2
        className={`text-lg text-center rounded-md  px-3 md:text-2xl font-semibol ${
          mode ? "text-white" : "text-zinc-900"
        }`}
      >
        eduardohhm18@gmail.com
      </h2>
      <div className="flex flex-cols-2 ml-10 mr-10 gap-16 justify-center items-center md:flex-cols-3">
        <MapContact></MapContact>
      </div>

      <div className="text-center py-2 bg-gray-800 ">
        <h1 className="text-lg text-center rounded-md text-white px-3 md:text-xl font-semibold ">
          Made with 💖 Next js & Tailwind css
        </h1>
      </div>
    </div>
  );
};

const MapContact = () => {
  const contactArray = [
    {
      url: "https://github.com/EduardoHead18",
      image: "/assets/contact/github.jpg",
      text: "github",
    },
    {
      url: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpfDRMttBkPBZTfVFsXjZNvSqhHCzNfRfmlgxhRxXjVqKblvcVFgPcZXKnjCgvLSmHwsSb",
      image: "/assets/contact/gmail.jpg",
      text: "gmail",
    },
    {
      url: "https://www.linkedin.com/in/eduardo-hhm/",
      image: "/assets/contact/linkendi.jpg",
      text: "linkedin",
    },
  ];

  {
    return(
      contactArray.map((data, index) => {
        return (
          <>
            <a
              key={index}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-lg drop-shadow-lg transition delay-100 hover:rotate-12 hover:rounded-full hover:scale-75 hover:translate-y-1"
                src={data.image}
                width={80}
                height={80}
                alt={data.text}
              ></Image>
            </a>
            
          </>
        );
      })
    )
  }
};
