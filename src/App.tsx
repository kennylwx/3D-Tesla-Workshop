import { useMemo, useRef, Suspense } from "react";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  ReactThreeFiber,
  ThreeElements,
  useLoader,
  ThreeEvent,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { BufferAttribute } from "three";
extend({ OrbitControls });
import useStore from "./globalStore";

import Floor from "./components/Floor";
import SiteModel from "./components/SiteModel";
import InteractableBox from "./components/InteractableBox";
import Bulb from "./components/Bulb";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Background = (props: ThreeElements["mesh"]) => {
  const texture = useLoader(THREE.TextureLoader, "/test-bg-cloud.png");

  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return <primitive attach="background" object={texture} {...props} />;
};

const ColorPicker = () => {
  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
      <div style={{ background: "blue", height: 50, width: 50 }}></div>
      <div style={{ background: "yellow", height: 50, width: 50 }}></div>
      <div style={{ background: "white", height: 50, width: 50 }}></div>
    </div>
  );
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <Canvas
        style={{ background: "#B1D9F4" }}
        camera={{ position: [5, 5, 5] }}
        shadows
      >
        <Orbit />
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 10, 0]} />
        <axesHelper args={[100]} />

        <Suspense fallback={null}>
          <InteractableBox position={[-4, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <InteractableBox position={[4, 1, 0]} />
        </Suspense>

        {/* <SiteModel position={[0, 11, 0]} /> */}
        <Floor position={[0, 0, 0]} />

        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
