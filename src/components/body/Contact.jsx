import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Contact = () => {
  return (
    <div className="h-screen mt-52">
      <div className="flex flex-cols-2 gap-16 justify-center items-center md:flex-cols-3">
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
          />
        </a>
      </div>
    </div>
  );
};
