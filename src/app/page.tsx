"use client";

import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import Header from "./components/Header";
import Carrossel from "./components/Carrossel";
import Categorias from "./components/Categorias";
import EventsGerais from "./components/EventsGeral";
import Card2 from "./components/card2";
import Header2 from "./components/Header2";
import SubCategoria from "./components/subcategoria";
import Footer from "./components/Footer";

export default function Home() {
    return (
      <>
      <Header2 />
       <Carrossel />
         <Categorias />
           <EventsGerais />
            <SubCategoria />
              <Footer />
      </>
    );
}
