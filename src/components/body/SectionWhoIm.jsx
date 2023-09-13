import TypeIt from "typeit-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useReduxState } from "@/custom/useReduxState";
const ContenLeft = () => {
  const mode = useReduxState();
  return (
    <div>
      <div className="text-2xl font-bold bg-red-400 rounded-md text-white px-3 py-2 md:text-3xl lg:text-4xl lg:w-2/3">
        Hola Mundo, Soy Eduardo 👋!
      </div>

      <div>
        <p
          style={{ fontFamily: "'Hind Madurai' ,sans-serif" }}
          className={`animacion-left text-xl mt-10 md:mt-20 md:text-2xl lg:text2xl opacity-90  lg:mr-44 ${mode ? "text-white":"text-zinc-900 "}`}
           
        >
          Ingeniero de software en busca de nuevas oportunidades. Cuento con
          experiencia en el desarrollo de software, especialmente en el
          desarrollo de{" "}
          <span className="text-red-400">aplicaciones móviles y web</span>.
          Estoy emocionado por unirme a un equipo comprometido con el éxito y la
          innovación.
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
      src={"/assets/me.jpg"}
      alt="profile"
      loading="lazy"
      width={700}
      height={700}
      style={{ objectFit: "cover" }}
    />
  );
};

export const SectionWhoIm = () => {
  return (
    <>
      <div className="2xl:mt-14 2xl:mb-20 lg:h-67">
        <div className="flex flex-col md:flex-row md:mt-5  items-center">
          <ContenLeft></ContenLeft>
          <ImageSection></ImageSection>
        </div>

        <div className="text-center md:text-left mt-16 ">
          {" "}
          <a
            className="bg-purple-600 p-2 rounded-md text-xl md:mt-9 px-7 hover:bg-purple-400 shadow-xl "
            href="https://drive.google.com/file/d/1LX5ru5OiL721OkBfPEylqUEBHjA3pieJ/view"
            target="_blank"
          >
            Ver CV
          </a>
        </div>
      </div>
    </>
  );
};
