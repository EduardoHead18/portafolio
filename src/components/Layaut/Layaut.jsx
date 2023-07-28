import Head from "next/head";
import { NavbarApp } from "../header/NavbarApp";
import { constStateRedux } from "@/utils/constReduxState";
import {motion} from "framer-motion";

export const Layaut = ({ children }) => {
  const mode = constStateRedux();  
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
