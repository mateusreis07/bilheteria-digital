// pages/eventos/criar.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormularioEvento from '@/app/components/FormularioEvento';
import { useEventos } from '@/context/EventoContext';

export default function CriarEvento() {
    const { adicionarEvento } = useEventos();
  //const [eventos, setEventos] = useState([]);
  const router = useRouter();

  const handleSave = (evento) => {
    evento.id = new Date().getTime(); // Gerar um ID único
    adicionarEvento(evento);
    //setEventos([...eventos, evento]);
    // Salvar no estado local por enquanto, idealmente deveria ser salvo em uma API ou banco de dados
    router.push('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Criar Novo Evento</h1>
      <FormularioEvento onSave={handleSave} />
    </div>
  );
}