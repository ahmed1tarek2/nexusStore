import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: [],
      addUser: (id) =>
        set((state) => {
          return { user: [...state.user, id] };
        }), 
      clearUser: () => set({ user: [] }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
