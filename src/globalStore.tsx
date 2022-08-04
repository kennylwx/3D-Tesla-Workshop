import create from "zustand";

interface LoginState {
  activeMesh: boolean;
  setActiveMesh: (activeMesh: boolean) => void;
  color: string;
  setColor: (color: string) => void;
}

const useStore = create<LoginState>((set) => ({
  activeMesh: false,
  setActiveMesh: (activeMesh) =>
    set((state) => ({
      ...state,
      activeMesh,
    })),
  color: "orange",
  setColor: (color) =>
    set((state) => ({
      ...state,
      color,
    })),
}));

export default useStore;
