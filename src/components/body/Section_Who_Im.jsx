import TypeIt from "typeit-react";
export const Section_Who_Im = () => {
  return (
    <>
      <div className="mb-24">
        <div className=" flex flex-col md:flex-row md:mt-5 md:mb-10">
          <div>
            <TypeIt className="text-base bg-red-400 rounded-md text-white px-3 py-2 md:text-2xl font-semibold">
              Hola Mundo, Soy Eduardo 😎!
            </TypeIt>
            <p className="text-xs mt-10 md:mt-20 md:text-xl opacity-80 text-justify md:mr-44 font-mono">
              Soy un apasionado desarrollador de software en busca de nuevas
              oportunidades. Cuento con experiencia en el desarrollo de
              software, especialmente en el desarrollo de <span className="text-red-400">aplicaciones móviles,
              web y microservicios</span>. Estoy emocionado por unirme a un equipo
              comprometido con el éxito y la innovación en el mundo tecnologico.
            </p>
          </div>

          <img
            className="hidden md:block rounded-full w-50 h-50 md:w-300 md:h-300 "
            src={"assets/ft1.jpg"}
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};
