import Head from "next/head";
import { NavbarApp } from "../header/NavbarApp";
// import {motion} from "framer-motion";
import { useReduxState } from "@/custom/useReduxState";

export const Layaut = ({ children }) => {
  const mode = useReduxState();
  return (
    <>
      <Head>
        <title>Eduardo - Software engineer</title>
      </Head>
      <div
        animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`transition-all duration-500 ${
          mode
            ? " bg-slate-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
            : "h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        }`}
      >
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        {/**render del navbar */}
        <NavbarApp></NavbarApp>
        {/**<div className="ml-10 mr-10 md:ml-20 md:mr-20">{children}</div> */}
      </div>
    </>
  );
};
