"use client";

import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import EventoCard from "./components/EventCard";
import { useEventos } from "@/context/EventoContext";
import Header from "./components/Header";

const allEvents = [
      { id: 1, nome: 'Evento 1', descricao: 'Descrição do evento 1' },
      { id: 2, nome: 'Evento 2', descricao: 'Descrição do evento 2' },
    ];


export default function Home() {
    const { eventos } = useEventos();
    //const [eventos, setEventos] = useState([
  
    return (
      <>
      <Header />
      
      <div className="container mx-auto">
        
        <h1 className="text-3xl font-bold mb-4">Eventos Disponíveis</h1>

        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {eventos.map((evento) => (
            <EventoCard key={evento.id} evento={evento} />
          ))}
        </div>
      </div>
      </>
    );
}
