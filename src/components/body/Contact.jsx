import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Contact = () => {
  return (
    <div className="h-screen mt-52 flex flex-col justify-between">
      <h1 className="text-lg text-center rounded-md text-white px-3 md:text-2xl font-semibold md:pt-20">Deja de ser un extraño y {" "}<span className="bg-red-400 rounded-md p-2">Contáctame 😃</span> </h1>
      <div className="flex flex-cols-2 ml-10 mr-10 gap-16 justify-center items-center md:flex-cols-3">
        <a
          href="https://github.com/EduardoHead18"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="rounded-lg drop-shadow-lg transition delay-100 hover:rotate-12 hover:rounded-full hover:scale-75 hover:translate-y-1"
            src={"/assets/contact/github.jpg"}
            width={100}
            height={100}
            alt="github"
          ></Image>
        </a>

        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpfDRMttBkPBZTfVFsXjZNvSqhHCzNfRfmlgxhRxXjVqKblvcVFgPcZXKnjCgvLSmHwsSb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="rounded-lg drop-shadow-lg transition delay-100 hover:rotate-12 hover:rounded-full hover:scale-75 hover:translate-y-1"
            src={"/assets/contact/gmail.jpg"}
            width={100}
            height={100}
            alt="gmail"
          ></Image>
        </a>

        <a
          href="https://www.linkedin.com/in/eduardo-hernández-morales-716473225/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="rounded-lg drop-shadow-lg transition delay-100 hover:rotate-12 hover:rounded-full hover:scale-75 hover:translate-y-1"
            src={"/assets/contact/linkendi.jpg"}
            width={100}
            height={100}
            alt="linkendi"
          />
        </a>
      </div>

      <div className="text-center py-2 bg-gray-800 ">
        <h1 className="text-lg text-center rounded-md text-white px-3 md:text-xl font-semibold ">Hecho con 💖 Next js y Tailwind css</h1>
      </div>
    </div>
  );
};
