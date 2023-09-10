import { useReduxState } from "@/custom/useReduxState";
import Image from "next/image";

const coverStyle ={objectFit:"cover"}

export const SectionProjects = () => {
  const mode = useReduxState();
  return (
    <>
      <h1
        className={`text-lg flexjustify-center  text-center rounded-md md:text-2xl font-semibold ${
          mode ? "text-white" : "text-zinc-900"
        }`}
      >
        Proyectos
      </h1>
      <FirstProject mode={mode}></FirstProject>
      <SecondProject mode={mode}></SecondProject>
    </>
  );
};

const FirstProject = ({ mode, style }) => {
  // code
  return (
    <div
      className={`flex flex-col lg:flex-row lg:mt-10 my-24 lg:py-24 shadow-lg rounded-lg ${
        mode ? "bg-zinc-900 " : "bg-white"
      }`}
    >
      <Image
        src={"/assets/img-projects/black_honey.jpg"}
        width={600}
        height={400}
        alt="ok"
        style={coverStyle}
      ></Image>
      <div className="flex p-5 flex-col lg:mx-14 ">
        <h1
          className={`lg:text-xl font-semibold mb-5 ${
            mode ? "text-white" : "text-zinc-900"
          }`}
        >
          Black Honey Café
        </h1>
        <p
          style={{ fontFamily: "'Hind Madurai' ,sans-serif" }}
          className={mode ? "text-white" : "text-zinc-900"}
        >
          Blog para la cafetería Black Honey Café. La página web fue creada
          para que pudieran mostrar sus productos en internet, la cafetería se
          encuentra ubicada en Guadalajara Jalisco México.
        </p>

        <div className="flex flex-row gap-4 mt-5 text-zinc-500 mb-5 lg:mb-0">
          <p>#React_js</p>
          <p>#React_router</p>
          <p>#Css</p>
        </div>

        <a
          className="bg-purple-600 p-2 rounded-md lg:text-xl md:mt-9 px-7 hover:bg-purple-400 shadow-xl text-center "
          href="https://blackhonycafe.com"
          target="_blank"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
};

const SecondProject = ({ mode, style }) => {
  // code
  return (
    <div
      className={`flex flex-col lg:flex-row lg:mt-10 my-24 lg:py-24 shadow-lg rounded-lg ${
        mode ? "bg-zinc-900 " : "bg-white"
      }`}
    >
      <Image
     
        src={"/assets/img-projects/bamp_autos.png"}
        width={600}
        height={400}
        alt="ok"
        style={coverStyle}
        
      ></Image>
      <div className="flex p-5 flex-col lg:mx-14 justify-between">
        <h1
          className={`lg:text-xl font-semibold mb-5 ${
            mode ? "text-white" : "text-zinc-900"
          }`}
        >
          Bamp Autos
        </h1>
        <p
          style={{ fontFamily: "'Hind Madurai' ,sans-serif" }}
          className={mode ? "text-white" : "text-zinc-900"}
        >
          Aplicación web que permite agendar citas con clientes. Cuenta con
          login y autenticación, modulo de citas para ver el estado que se
          encuentra la cita ya sea pendiente, finalizada etc. Se construyo con
          next js para aprovechar su server side rendering y tener un mejor performance, la aplicación cuenta con consumo de api y
          autenticación.
        </p>

        <div className="flex flex-row mt-5 gap-5 text-zinc-500 mb-5 lg:mb-0 w-32">
          <p>#Next_js</p>
          <p>#Api</p>
          <p>#Tailwind_css</p>
          <p>#Auth</p>
        </div>

        <a
          className="bg-purple-600 p-2 rounded-md lg:text-xl md:mt-9 px-7 hover:bg-purple-400 shadow-xl text-center "
          href="https://bamp-frontend.vercel.app"
          target="_blank"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
};
