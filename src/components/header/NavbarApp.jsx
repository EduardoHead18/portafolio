import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SectionWhoIm } from "../body/SectionWhoIm";
import { SectionProjects } from "../body/SectionProjects";
import { Skills } from "../body/Skills";
import { Contact } from "../body/Contact";
import { CiLight, CiDark } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { changeState } from "@/redux/futures/modeSlice";
import { useReduxState } from "@/custom/useReduxState";
import { RevealWrapper } from "next-reveal";

export const NavbarApp = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(router.pathname);

  //redux functions
  const dispatch = useDispatch();
  const mode = useReduxState();

  const darkMode = () => {
    const transitionCss = ""
    dispatch(changeState());
  };

  //style color
  const fontDarkMode = `font-medium ${mode ? "text-white" : "text-zinc-900"}`;

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="min-h-full sticky top-0 opacity-90 z-50 ">
        <nav
          className={`transform ${
            mode ? "text-white bg-zinc-900 " : "text-zinc-900 black- bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between md:justify-center">
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="hidden md:block">
                  <div className="ml-10 flex  space-x-4">
                    {/** menu Inicio */}
                    <Link
                      href={"/"}
                      onClick={() => setIsActive("/")}
                      className={`${
                        isActive == "/"
                          ? "text-purple-600 font-bold border-b-2"
                          : fontDarkMode
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
                          : fontDarkMode
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
                          : fontDarkMode
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
                          : fontDarkMode
                      } px-3 py-2 text-lg`}
                    >
                      Contacto
                    </Link>

                    <button className="" onClick={darkMode}>
                      {mode ? (
                        <CiLight
                          color="black"
                          size={25}
                          className="bg-slate-200 rounded-full "
                        ></CiLight>
                      ) : (
                        <CiDark
                          color="black"
                          size={25}
                          className="bg-slate-200 rounded-full "
                        ></CiDark>
                      )}
                    </button>
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

          {/**----------------------- mobile design-------------------------------------*/}

          {isMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 text-center pt-2 pb-3 sm:px-3 transform transition ease-in-out delay-150 hover:-translate-y-1 duration-100 ">
                <Link
                  href={"/"}
                  onClick={() => setIsActive("/")}
                  className={`${
                    isActive == "/" ? "text-purple-600 font-bold" : fontDarkMode
                  }  px-3 block py-2 text-sm`}
                >
                  Inicio
                </Link>

                <Link
                  href={"#section-2"}
                  onClick={() => setIsActive("#section-2")}
                  className={`${
                    isActive == "#section-2"
                      ? "text-purple-600 font-bold"
                      : fontDarkMode
                  }  px-3 block py-2 text-sm`}
                >
                  Skills
                </Link>

                <Link
                  href={"#section-3"}
                  onClick={() => setIsActive("#section-3")}
                  className={`${
                    isActive == "#section-3"
                      ? "text-purple-600 font-bold"
                      : fontDarkMode
                  }  block px-3 py-2 text-sm`}
                >
                  Proyectos
                </Link>

                <Link
                  href={"#section-4"}
                  onClick={() => setIsActive("#section-4")}
                  className={`${
                    isActive == "#section-4"
                      ? "text-purple-600 font-bold"
                      : fontDarkMode
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

      {/**components that are rendered with the navbar-section of the page index (Landing page) (spa) */}
      {/**Here the margin x of the page is defined */}
      <div className="mx-5 sm:mx-5 md:mx-24 2xl:mx-96">
        <SectionWhoIm></SectionWhoIm>

        <div id="section-2">
          <RevealWrapper
            rotate={{ x: 0, y: 0, z: 0 }}
            origin="bottom"
            delay={100}
            duration={2000}
            distance="1000px"
            opacity={0}
          >
            <Skills></Skills>
          </RevealWrapper>
        </div>

        <div id="section-3">
        <RevealWrapper
            rotate={{ x: 0, y: 0, z: 0 }}
            origin="bottom"
            delay={100}
            duration={2000}
            distance="500px"
            opacity={0}
          >
          <SectionProjects></SectionProjects>
          </RevealWrapper>
        </div>
      </div>
      <div className="animacion" id="section-4">
        <Contact></Contact>
      </div>
    </>
  );
};
