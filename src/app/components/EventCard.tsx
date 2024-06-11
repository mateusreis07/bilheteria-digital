"use client";

import Link from 'next/link';

export default function EventoCard({ evento }) {
    return (
        <div className="border p-4 rounded-lg shadow-lg w-64 h-64">
        <h2 className="text-xl font-bold">{evento.nome}</h2>
        <p>{evento.descricao}</p>
        <Link href={`/eventos/${evento.id}`}>
          <h1 className="text-blue-500">Ver detalhes</h1>
        </Link>
      </div>
    );
  }