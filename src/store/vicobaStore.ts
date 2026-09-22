import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Mwanachama } from '../types';

interface VicobaState {
  wanachama: Mwanachama[];
  ongezaMwanachama: (data: Omit<Mwanachama, 'id' | 'nambaYaMwanachama'>) => void;
  haririMwanachama: (id: string, data: Partial<Mwanachama>) => void;
  futaMwanachama: (id: string) => void;
}

const uid = (): string => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
};

export const useVicoba = create<VicobaState>()(
  persist(
    (set) => ({
      wanachama: [],

      ongezaMwanachama: (data) =>
        set((s) => {
          const namba = `VCB-${String(s.wanachama.length + 1).padStart(3, '0')}`;
          const mpya: Mwanachama = {
            ...data,
            id: uid(),
            nambaYaMwanachama: namba,
          };
          return { wanachama: [...s.wanachama, mpya] };
        }),

      haririMwanachama: (id, data) =>
        set((s) => ({
          wanachama: s.wanachama.map((w) => (w.id === id ? { ...w, ...data } : w)),
        })),

      futaMwanachama: (id) =>
        set((s) => ({
          wanachama: s.wanachama.filter((w) => w.id !== id),
        })),
    }),
    { name: 'vicoba-storage' }
  )
);
