import { useReduxState } from "@/custom/useReduxState";
import Image from "next/image";

const coverStyle = { objectFit: "cover" };

const data = [
  {
    title: " Black Honey Café",
    image: "/assets/img-projects/bamp_autos.png",
    description:
      "Blog para la cafetería Black Honey Café. La página web fue creada para que pudieran mostrar sus productos en internet, la cafetería se encuentra ubicada en Guadalajara Jalisco México",
    tags: ["React js", "React Router", "Css"],
    url: "https://blackhonycafe.com",
  },
  {
    title: "Bamp Autos",
    image: "/assets/img-projects/bamp_autos.png",
    description:
      " Aplicación web que permite agendar citas con clientes. Cuenta con login y autenticación, modulo de citas para ver el estado que se encuentra la cita ya sea pendiente, finalizada etc. Se construyo con next js para aprovechar su server side rendering y tener un mejor performance, la aplicación cuenta con consumo de api y autenticación.",
    tags: ["Next Js", "Api", "Tailwind Css", "Auth", "Cache"],
    ulr: "https://bamp-frontend.vercel.app",
  },
  {
    title: "Your confort",
    image: "/assets/img-projects/yc.png",
    description:
      "Your Confort facilita la búsqueda de alojamiento para personas a través de una aplicación. Nos enfocamos en proporcionar una plataforma intuitiva y eficiente que conecte a los usuarios con opciones de viviendas en renta, brindando una solución confiable y conveniente para cubrir sus necesidades de vivienda.",
    tags: [
      "React_Native",
      "Expo",
      "Cloudinary",
      "Google_auth",
      "Async_storage",
      "IOS",
      "Android",
      "Context",
      "Image_picker",
      "Stripe_subscription",
    ],
    url: "https://your-confort-page-8mqvr9j8g-eduardohead18.vercel.app/",
  },
];

export const SectionProjects = () => {
  const mode = useReduxState();
  return (
    <>
      <h1
        className={`text-lg  rounded-md   md:text-2xl font-bold ${
          mode ? "text-white" : "text-zinc-900"
        } `}
      >
        🚀 Projects
      </h1>

      <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
        {[...data].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
              i === 3 || i === 6 ? "col-span-2" : ""
            }`}
          ></div>
        ))}
      </div>
    </>
  );
};
