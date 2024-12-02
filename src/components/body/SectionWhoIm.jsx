import TypeIt from "typeit-react";
import Image from "next/image";
// import { motion } from "framer-motion";
import { useReduxState } from "@/custom/useReduxState";
import { ButtonStyle } from "../ButtonStyle";
import { marginBottom } from "@/constants/tailwind-constants";

const ContenLeft = () => {
  const mode = useReduxState();
  return (
    <div>
      <div className="text-2xl font-bold bg-red-400 rounded-md text-white px-3 py-2 md:text-3xl lg:text-4xl lg:w-2/3">
        Hello world, I'm Eduardo 👋!
      </div>

      <div>
        <p
          style={{ fontFamily: "'Hind Madurai' ,sans-serif",  lineHeight: "2.25rem" }}
          className={`animacion-left text-xl mt-10 md:mt-20 md:text-xl  opacity-90 lg:mr-44 ${
            mode ? "text-white" : "text-zinc-900 "
          }`}
        >
          Software engineer with 1 year of experience in {"  "}
          <span className="text-red-400 font-semibold">
            Fullstack projects{" "}
          </span>
        I like to create clear and functional solutions, applying good programming practices. 
        I am adaptable to new technologies and work in a team, achieving objectives efficiently.

        </p>
      </div>
    </div>
  );
};

const ImageSection = () => {
  // code
  return (
    <Image
      className=" items-center rounded-full overflow-hidden hidden lg:block"
      class
      src={"/assets/icon.jpg"}
      alt="profile"
      loading="lazy"
      width={700}
      height={700}
      style={{ objectFit: "cover" }}
    />
  );
};

export const SectionWhoIm = () => {
  let mode = useReduxState();
  return (
    <>
      <div
        className={`2xl:mt-14 mb-${marginBottom} lg:h-67 ${
          mode
            ? "bg-slate-800 p-10 rounded-lg rounded-red-200 border-[1px] border-slate-600"
            : "bg-amber-50 p-10 rounded-lg rounded-red-200 border-[1px] border-amber-200"
        }`}
      >
        <div className="flex flex-col md:flex-row md:mt-5  items-center ">
          <ContenLeft></ContenLeft>
          <ImageSection></ImageSection>
        </div>
        <ButtonStyle text="See cv" url={"https://drive.google.com/file/d/1cGBhBchVvOhrdI-RKNBQpZ90AaxvV8H6/view?usp=sharing"}></ButtonStyle>
        <SocialNetwork></SocialNetwork>
      </div>
    </>
  );
};

const SocialNetwork = () => {
  const contactArray = [
    {
      url: "https://github.com/EduardoHead18",
      image: "/assets/contact/github.jpg",
      text: "github",
    },

    {
      url: "https://www.linkedin.com/in/eduardo-hernández-morales-716473225/",
      image: "/assets/contact/linkendi.jpg",
      text: "linkedin",
    },
  ];

  return (
    <div className="flex justify-center gap-10 mt-10 md:mt-0">
      {contactArray.map((data, index) => {
        return (
          <>
            <a
              key={index}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <Image
                className="rounded-lg  "
                src={data.image}
                width={40}
                height={40}
                alt={data.text}
              ></Image>
            </a>
          </>
        );
      })}
    </div>
  );
};
