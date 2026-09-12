import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: {},
      addUser: (user) =>
        set(() => {
          return { user };
        }),
      clearUser: () => set({ user: {}  }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
