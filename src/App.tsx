import { Suspense } from "react";
import { Canvas, ThreeElements, useLoader } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import * as THREE from "three";

import Floor from "./components/Floor";
import Bulb from "./components/Bulb";
import ColorPicker from "./components/ColorPicker";
import Orbit from "./components/Orbit";
import Sun from "./components/Sun";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Model from "./components/Model";
import SiteCombinedModel from "./components/SiteCombinedModel";

const Background = (props: ThreeElements["mesh"]) => {
  const texture = useLoader(THREE.TextureLoader, "/test-bg-cloud.png");

  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return <primitive attach="background" object={texture} {...props} />;
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <CameraButtons />
      <Canvas
        style={{ background: "#B1D9F4" }}
        camera={{ position: [50, 50, 50] }}
        shadows
      >
        <CameraControls />
        <Orbit />
        <ambientLight intensity={0.2} />
        <axesHelper args={[500]} />

        <Bulb position={[-200, 10, -90]} scale={10} />

        <Physics>
          <Suspense fallback={null}>
            <SiteCombinedModel position={[0, 11, 0]} />
          </Suspense>
          <Sun />

          <Floor position={[0, 0, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
