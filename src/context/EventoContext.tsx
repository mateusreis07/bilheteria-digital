// src/context/EventoContext.js
"use client";

import { createContext, useState, useContext, useEffect } from 'react';

const EventoContext = createContext();

export function EventoProvider({ children }) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const eventosSalvos = localStorage.getItem('eventos');
    if (eventosSalvos) {
      setEventos(JSON.parse(eventosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('eventos', JSON.stringify(eventos));
  }, [eventos]);

  const adicionarEvento = (evento) => {
    setEventos((prevEventos) => [...prevEventos, evento]);
  };

  return (
    <EventoContext.Provider value={{ eventos, adicionarEvento }}>
      {children}
    </EventoContext.Provider>
  );
}

export function useEventos() {
  return useContext(EventoContext);
}