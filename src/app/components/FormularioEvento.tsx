"use client";
import { useState } from 'react';

interface OnSaveProps{
  onSave: any[]
}

export default function FormularioEvento({ onSave }: OnSaveProps) {
    const [nome, setNome] = useState('');
    const [local, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ nome, local });
        setNome('');
        setDescricao('');
      };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome do Evento</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Local</label>
          <textarea
            value={local}
            onChange={(e) => setDescricao(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Salvar</button>
      </form>
    );
}
