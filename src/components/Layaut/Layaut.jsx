import Head from "next/head";
import { NavbarApp } from "../header/NavbarApp";
import { FooterApp } from "../footer/FooterApp";


export const Layaut = ({ children }) => {
  return (
    <>
      <Head>
        <title>Eduardo Hm</title>
        <script src="https://unpkg.com/scrollreveal" async/>
      </Head>
      <div className="bg-slate-900">
        {/**render del navbar */}
        <NavbarApp></NavbarApp>
        {/**<div className="ml-10 mr-10 md:ml-20 md:mr-20">{children}</div> */}
        <FooterApp></FooterApp>
      </div>
    </>
  );
};
