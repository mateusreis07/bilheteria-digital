"use client";
import { useState } from "react";
import { useEventos } from "@/context/EventoContext";
import EventoCard from "./EventCard";

{/*const allEvents = [
  { id: 1, nome: 'Evento 1', descricao: 'Descrição do evento 1' },
  { id: 2, nome: 'Evento 2', descricao: 'Descrição do evento 2' },
];*/}

export default function EventsGerais() {
  const { eventos } = useEventos();
  //const [eventos, setEventos] = useState([

  return (
<div className="p-4">
  <div className="container max-w-6xl mx-auto">

    <h1 className=" text-xl font-bold mb-4">Eventos Disponíveis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:max-w-full">

        {eventos.map((evento) => (
          <EventoCard key={evento.id} evento={evento} />
        ))}
      </div>
  </div>
</div>
  );
}
