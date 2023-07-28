import { Layaut } from "@/components/Layaut/Layaut";
import store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

export default function index() {
  //el componente que se renderiza es el navbar, el navbar tiene a todos los componentes como hijos, ya que es una spa
  return <Provider store={store}>
    <Layaut></Layaut>
  </Provider>;
}

