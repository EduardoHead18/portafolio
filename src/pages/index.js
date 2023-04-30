import { Layaut } from "@/components/Layaut/Layaut";
import { SectionProjects } from "@/components/body/SectionProjects";
import { SectionWhoIm } from "@/components/body/SectionWhoIm";

import React from "react";

export default function index() {
  /** 
    <Layaut>
      <SectionWhoIm className="#section-1"></SectionWhoIm>
      <SectionProjects className="#se"></SectionProjects>
    </Layaut>
    */
  //el componente que se renderiza es el navbar, el navbar tiene a todos los componentes como hijos, ya que es una spa
  return <Layaut></Layaut>;
}
