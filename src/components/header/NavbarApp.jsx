import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SectionWhoIm } from "../body/SectionWhoIm";
import { scrollConfig } from "@/utils/ScrollReveal";
import { SectionProjects } from "../body/SectionProjects";
import { Skills } from "../body/Skills";
import { Contact } from "../body/Contact";

export const NavbarApp = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(router.pathname);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    scrollConfig();
  }, []);
  return (
    <>
      <div className="min-h-full sticky top-0 opacity-90 z-50 ">
        <nav className="bg-slate-900 transform ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between md:justify-center">
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {/** menu Inicio */}
                    <Link
                      href={"/"}
                      onClick={() => setIsActive("/")}
                      className={`${
                        isActive == "/"
                          ? "text-purple-600 font-bold border-b-2"
                          : "font-medium text-white"
                      }  px-3 py-2 text-lg`}
                    >
                      Inicio
                    </Link>
                    {/** menu Skills */}
                    <Link
                      href={"#section-2"}
                      onClick={() => setIsActive("#section-2")}
                      className={`${
                        isActive == "#section-2"
                          ? "text-purple-600 font-bold border-b-2"
                          : "font-medium  text-white    "
                      } px-3 py-2 text-lg`}
                    >
                      Skills
                    </Link>
                    {/** menu proejcts */}
                    <Link
                      href={"#section-3"}
                      onClick={() => setIsActive("section-3")}
                      className={`${
                        isActive == "section-3"
                          ? "text-purple-600 font-bold border-b-2"
                          : "font-medium text-white"
                      }  px-3 py-2 text-lg`}
                    >
                      Proyectos
                    </Link>
                    {/** menu proejcts */}
                    <Link
                      href={"#section-4"}
                      onClick={() => setIsActive("#section-4")}
                      className={`${
                        isActive == "#section-4"
                          ? "text-purple-600 font-bold border-b-2"
                          : "font-medium  text-white"
                      } px-3 py-2 text-lg`}
                    >
                      Contacto
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* modal */}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={handleMenuClick}
                  href="/index"
                  id="boton"
                  type="button"
                  className="inline-flex items-center justify-center rounded-md text-purple-600 opacity-90  p-2   focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/**------------------------------------------------------------ */}

          {isMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <Link
                  href={"/"}
                  onClick={() => setIsActive("/")}
                  className={`${
                    isActive == "/"
                      ? "text-purple-600 font-bold border-b-2"
                      : "font-medium text-white"
                  }  px-3 block py-2 text-sm`}
                >
                  Inicio
                </Link>

                <Link
                  href={"#section-2"}
                  onClick={() => setIsActive("#section-2")}
                  className={`${
                    isActive == "#section-2"
                      ? "text-purple-600 font-bold border-b-2"
                      : "font-medium text-white"
                  }  px-3 block py-2 text-sm`}
                >
                  Skills
                </Link>

                <Link
                  href={"#section-3"}
                  onClick={() => setIsActive("#section-3")}
                  className={`${
                    isActive == "#section-3"
                      ? "text-purple-600 font-bold border-b-2"
                      : "font-medium text-white"
                  }  block px-3 py-2 text-sm`}
                >
                  Proyectos
                </Link>

                <Link
                  href={"#section-4"}
                  onClick={() => setIsActive("#section-4")}
                  className={`${
                    isActive == "#section-4"
                      ? "text-purple-600 font-bold border-b-2"
                      : "font-medium text-white"
                  }  block px-3 py-2 text-sm`}
                >
                  Contacto
                </Link>

                {/**text */}
                <div className="ml-4 flex justify-between items-center md:ml-6 px-5">
                  {/* modal */}
                </div>
              </div>
            </div>
          )}
        </nav>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
        </main>
      </div>

      {/**componentes que se renderizan con el navbar-section de la pagina index (spa) */}
      <div className="ml-10 mr-10 md:ml-20 md:mr-20">
        <div className="animacion">
          <SectionWhoIm></SectionWhoIm>
        </div>

        <div className="animacion" id="section-2">
          <Skills></Skills>
        </div>

        <div className="animacion" id="section-3">
          <SectionProjects></SectionProjects>
        </div>

       

      </div>
      <div className="animacion" id="section-4">
          <Contact></Contact>
        </div>
    </>
  );
};
