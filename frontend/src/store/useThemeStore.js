import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem('chat-theme') || 'cupcake',
  setTheme: (theme) => {
    set({ theme });
    localStorage.setItem('chat-theme', theme);
  },
}));
