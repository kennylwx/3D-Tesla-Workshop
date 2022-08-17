import { Triplet } from "@react-three/cannon";
import { ThreeElements } from "@react-three/fiber";
import create from "zustand";
import * as THREE from "three";

type MeshType = ThreeElements["mesh"] | null;

interface CameraState {
  activeMeshName: string | null;
  setActiveMesh: (activeMesh: string | null) => void;
  cameraPos: THREE.Vector3;
  setCameraPos: (cameraPos: THREE.Vector3) => void;
  target: THREE.Vector3;
  setTarget: (target: THREE.Vector3) => void;
  shouldUpdate: boolean;
  setShouldUpdate: (shouldUpdate: boolean) => void;
}

const useStore = create<CameraState>((set) => ({
  activeMeshName: null,
  setActiveMesh: (activeMeshName) =>
    set((state) => ({
      ...state,
      activeMeshName,
    })),
  cameraPos: new THREE.Vector3(10, 10, 10),
  setCameraPos: (cameraPos) =>
    set((state) => ({
      ...state,
      cameraPos,
    })),
  target: new THREE.Vector3(4, 0, 0),
  setTarget: (target) =>
    set((state) => ({
      ...state,
      target,
    })),
  shouldUpdate: false,
  setShouldUpdate: (shouldUpdate) =>
    set((state) => ({
      ...state,
      shouldUpdate,
    })),
}));

export default useStore;
