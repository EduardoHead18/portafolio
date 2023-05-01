import TypeIt from "typeit-react";
import Image from "next/image";
import { scrollConfig } from "@/utils/ScrollReveal";
import { useEffect } from "react";

export const SectionWhoIm = () => {
  useEffect(() => {
    scrollConfig;
  }, []);
  return (
    <>
      <div className="md:mt-10  md:h-screen">
        <TypeIt className="text-2xl font-bold bg-red-400 rounded-md text-white px-3 py-2 md:text-3xl ">
          Hola Mundo, Soy Eduardo 👋!
        </TypeIt>
        <div className="flex flex-col md:flex-row md:mt-5  ">
          <div>
            <p className="animacion-left text-xl mt-10 md:mt-20 md:text-2xl opacity-90 text-justify md:mr-44 font-semibold">
              Un apasionado desarrollador de software en busca de nuevas
              oportunidades. Cuento con experiencia en el desarrollo de
              software, especialmente en el desarrollo de{" "}
              <span className="text-red-400">
                aplicaciones móviles, web, Frontend y Backend
              </span>
              . Estoy emocionado por unirme a un equipo comprometido con el
              éxito y la innovación en el mundo tecnológico.
            </p>
          </div>

          <div className="animacion-right hidden  md:block  w-300 ">
            <div className="rounded-full overflow-hidden ">
              <Image
                src={"/assets/ft1.jpg"}
                alt="profile"
                width={1200}
                height={900}
              />
            </div>
          </div>
        </div>

        <div className="text-center md:text-left mt-16 animate-pulse">
          {" "}
          <a
            className="bg-purple-600 p-2 rounded-md text-xl md:mt-9 px-7 hover:bg-purple-400 shadow-xl "
            href="https://drive.google.com/file/d/1rgiaVaa0IumDJm8ZpV4WWP72iKS5np2i/view?usp=drivesdk"
            target="_blank"
          >
            Ver CV
          </a>
        </div>
      </div>
    </>
  );
};
