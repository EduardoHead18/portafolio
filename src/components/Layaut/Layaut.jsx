import Head from "next/head";
import { NavbarApp } from "../header/NavbarApp";
// import {motion} from "framer-motion";
import { useReduxState } from "@/custom/useReduxState";

export const Layaut = ({ children }) => {
  const mode = useReduxState();  
  return (
    <>
      <Head>
        <title>Eduardo Hm</title>
      </Head>
      <div
      
        animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={mode ? "dark:bg-zinc-950" : "bg-white"}
      >
        {/**render del navbar */}
        <NavbarApp></NavbarApp>
        {/**<div className="ml-10 mr-10 md:ml-20 md:mr-20">{children}</div> */}
      </div>
    </>
  );
};
