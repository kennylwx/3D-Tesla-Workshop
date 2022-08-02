import create from "zustand";

interface LoginState {
  activeMesh: boolean;
  setActiveMesh: (activeMesh: boolean) => void;
}

const useStore = create<LoginState>((set) => ({
  activeMesh: false,
  setActiveMesh: (activeMesh) =>
    set((state) => ({
      ...state,
      activeMesh,
    })),
}));

export default useStore;
