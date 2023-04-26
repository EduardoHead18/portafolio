import React from "react";

export const Section_Projects = () => {
  return (
    <>
    <h1 className="text-base text-center rounded-md text-white px-3 py-2 md:text-2xl font-semibold">Proyectos</h1>
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={"assets/img-projects/bamp.jpg"}
                  alt="Front of men&#039;s Basic Tee in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between text-justify">
                <div>
                  <h3 className="text-sm text-white">
                    <a href="https://bamp-frontend.vercel.app">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Aplicación de venta de autos que permite agendar citas. El
                      frontend fue desarrollado utilizando Next js y Tailwind
                      CSS, mientras que el backend se construyó con Node.js,
                      MongoDB y JWT."
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">#Next Js #Node Js #MogoDb</p>
                  <p className="mt-1 text-sm text-gray-500">#Cloudinary #Tailwind Css #React js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
