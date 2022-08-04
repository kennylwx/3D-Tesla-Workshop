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

import * as THREE from "three";

import Floor from "./components/Floor";
import SiteModel from "./components/SiteModel";
import InteractableBox from "./components/InteractableBox";
import Bulb from "./components/Bulb";
import { ColorPicker } from "./components/ColorPicker";
import { Orbit } from "./components/Orbit";
import { Dragable } from "./components/Dragable";

const Background = (props: ThreeElements["mesh"]) => {
  const texture = useLoader(THREE.TextureLoader, "/test-bg-cloud.png");

  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return <primitive attach="background" object={texture} {...props} />;
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
        <Dragable>
          <Suspense fallback={null}>
            <InteractableBox position={[-4, 1, 0]} />
          </Suspense>
          <Suspense fallback={null}>
            <InteractableBox position={[4, 1, 0]} />
          </Suspense>
        </Dragable>

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
