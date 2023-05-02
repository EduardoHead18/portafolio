import Image from "next/image";
import { scrollConfig } from "@/utils/ScrollReveal";
import { useEffect } from "react";
export const SectionProjects = () => {
  useEffect(() => {
    scrollConfig();
  }, []);
  return (
    <div className="mt-28">
      <h1 className="animacion text-lg text-center rounded-md text-white px-3 md:text-2xl font-semibold">
        Proyectos
      </h1>
      <div className="">
        <div className="animacion mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {/**Primer card */}
            <div className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  width={500}
                  height={200}
                  src={"/assets/img-projects/bamp2.jpg"}
                  alt="bamp project"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                ></Image>
              </div>
              <div className="mt-4 flex justify-between text-justify">
                <div>
                  <h3 className="text-lg md:text-xl text-white">
                    <a href="https://bamp-frontend.vercel.app" target="_blank">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      <h1 className="text-xl md:text-2xl mb-4 mt-2">
                        Bamp Autos
                      </h1>
                      Aplicación web de venta de autos que permite agendar citas
                      para cotizar.
                    </a>
                  </h3>
                  <br></br>
                  <p className="text-sm text-white grid grid-cols-3 gap-3 text-center">
                    <span className="bg-violet-600 p-2 rounded-full ">
                      #NextJs
                    </span>
                    <span className="bg-violet-600 p-2 rounded-full">#Api</span>
                    <span className="bg-violet-600 p-2 rounded-full">
                      #NodeJs
                    </span>
                    <span className="bg-violet-600 p-2 rounded-full">#Ssr</span>
                    <span className="bg-violet-600 p-2 rounded-full">
                      #Tailwind
                    </span>
                    <span className="bg-violet-600 p-2 rounded-full">
                      #ReactJs
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/**segundo card */}
            <div className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  width={500}
                  height={200}
                  src={"/assets/img-projects/api.jpg"}
                  alt="api image"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                ></Image>
              </div>
              <div className="mt-4 flex justify-between text-justify">
                <div>
                  <h3 className="text-lg md:text-xl text-white">
                    <a
                      href="https://github.com/EduardoHead18/bamp_backend.git"
                      target="_blank"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      <h1 className="text-xl md:text-2xl mb-4 mt-2">
                        Bamp backend
                      </h1>
                      Backend para almacenamiento de datos en MongoDB Atlas.
                    </a>
                  </h3>
                  <br></br>
                  <p className="text-sm text-white grid grid-cols-3 gap-3 text-center">
                    <span className="bg-rose-600 p-2 rounded-full ">
                      #NodeJs
                    </span>
                    <span className="bg-rose-600 p-2 rounded-full">
                      #ExpressJs
                    </span>
                    <span className="bg-rose-600 p-2 rounded-full">
                      #MongoDB
                    </span>
                    <span className="bg-rose-600 p-2 rounded-full">
                      #Cloudinary
                    </span>
                    <span className="bg-rose-600 p-2 rounded-full">#Jwt</span>
                    <span className="bg-rose-600 p-2 rounded-full">#Auth</span>
                  </p>
                </div>
              </div>
            </div>

            {/**tercer card */}
            <div className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  width={500}
                  height={200}
                  src={"/assets/img-projects/bhc.jpg"}
                  alt="black honey coffee"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                ></Image>
              </div>
              <div className="mt-4 flex justify-between text-justify">
                <div>
                  <h3 className="text-lg md:text-xl text-white">
                    <a href="https://blackhonycafe.com" target="_blank">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      <h1 className="text-xl md:text-2xl mb-4 mt-2">
                        Black Honey Coffee
                      </h1>
                      Blog para publicar imágenes y posts relacionados con la
                      cafetería.
                    </a>
                  </h3>
                  <br></br>
                  <p className="text-sm text-white grid grid-cols-3 gap-3 text-center">
                    <span className="bg-violet-600 p-2 rounded-full ">
                      #ReactJs
                    </span>
                    <span className="bg-violet-600 p-2 rounded-full">
                      #Bootstrap
                    </span>
                    <span className="bg-violet-600 p-2 rounded-full">
                      #Strapi
                    </span>
                    <span className="bg-violet-600 p-2 rounded-full">
                      #React-router
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
