// pages/eventos/[id].js
"use client";

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useEventos } from '@/context/EventoContext';

export default function DetalhesEvento({ params }: { params: { id: string } }) {
  //const router = useRouter();
  const { id } = params;
  const { eventos } = useEventos();
  const [evento, setEvento] = useState(null);



    useEffect(() => {
        if (id) {
          const eventoEncontrado = eventos.find((e) => e.id == id);
          setEvento(eventoEncontrado);
        }
      }, [id, eventos]);

    //useEffect(() => {
    // Simular a busca do evento por ID
    //const eventos = [
    //  { id: 1, nome: 'Evento 1', descricao: 'Descrição do evento 1' },
    //  { id: 2, nome: 'Evento 2', descricao: 'Descrição do evento 2' },
   // ];
   // const eventoEncontrado = eventos.find((e) => e.id == id);
    //setEvento(eventoEncontrado);
  //}, [id]);

  if (!evento) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{evento.nome}</h1>
      <p>{evento.local}</p>
    </div>
  );
}
