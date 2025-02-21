import { useRef, useEffect } from "react";
import { SectionWhoIm } from "../body/SectionWhoIm";
import { SectionProjects } from "../body/SectionProjects";
import { Skills } from "../body/Skills";
import { Contact } from "../body/Contact";
import { motion, useInView } from "framer-motion";
import { NavBar } from "./NavBar";

export const NavbarApp = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const section1InView = useInView(section1Ref, { once: true });
  const section2InView = useInView(section2Ref, { once: true });
  const section3InView = useInView(section3Ref, { once: true });

  const transition = {
    duration: 1,
    delay: 0.3,
    ease: "easeInOut",
  };

  const getAnimationProps = (ref, inView) => ({
    ref,
    initial: { y: -100, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition,
  });

  return (
    <>
      <NavBar />

      {/**components that are rendered with the navbar-section of the page index (Landing page) (spa) */}
      {/**Here the margin x of the page is defined */}
      <div className="mx-5 mt-5 sm:mx-5 md:mx-24 2xl:mx-96 ">
        <motion.div
          {...getAnimationProps(section1Ref, section1InView)}
          id="section-1"
        >
          <SectionWhoIm />
        </motion.div>

        <motion.div
          {...getAnimationProps(section2Ref, section2InView)}
          id="section-2"
        >
          <SectionProjects />
        </motion.div>

        <motion.div
          {...getAnimationProps(section3Ref, section3InView)}
          id="section-3"
        >
          <Skills />
        </motion.div>
      </div>
      <div className="animacion" id="section-4">
        <Contact />
      </div>
    </>
  );
};
