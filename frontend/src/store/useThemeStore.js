import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chatpoint-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chatpoint-theme", theme);
    set({ theme });
  },
}));