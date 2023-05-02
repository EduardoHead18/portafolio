import Image from "next/image";
import React from "react";

export const Skills = () => {
  return (
    <div className="md:h-screen">
      <h1 className="text-lg text-center mt-28 rounded-md text-white px-3 md:text-2xl font-semibold md:pt-20">
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 md:mr-16 md:ml-16 md:mt-20 py-24">
        <div className="flex flex-col gap-5 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Image
            className="rounded-full"
            src={"/assets/skills/react.jpg"}
            width={80}
            height={80}
            alt="react js"
          ></Image>
          <p className="text-center">React js</p>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Image
            className="rounded-full"
            src={"/assets/skills/node.jpg"}
            width={80}
            height={80}
            alt="node js"
          ></Image>
          <p className="text-center">Node js</p>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Image
            className="rounded-full"
            src={"/assets/skills/next.jpg"}
            width={80}
            height={80}
            alt="next js"
          ></Image>
          <p className="text-center">Next js</p>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Image
            className="rounded-full"
            src={"/assets/skills/java.jpg"}
            width={80}
            height={80}
            alt="java"
          ></Image>
          <p className="text-center">Java</p>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Image
            className="rounded-full"
            src={"/assets/skills/laravel.jpg"}
            width={80}
            height={80}
            alt="laravel"
          ></Image>
          <p className="text-center">Laravel</p>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Image
            className="rounded-full"
            src={"/assets/skills/tailwind.jpg"}
            width={80}
            height={80}
            alt="tailwind css"
          ></Image>
          <p className="text-center">Tailwind css</p>
        </div>
      </div>
    </div>
  );
};
