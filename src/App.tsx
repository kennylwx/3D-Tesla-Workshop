import { Suspense } from "react";
import { Canvas, ThreeElements, useLoader } from "@react-three/fiber";

import * as THREE from "three";

import Floor from "./components/Floor";
import SiteCombinedModel from "./components/SiteCombinedModel";
import InteractableBox from "./components/InteractableBox";
import Bulb from "./components/Bulb";
import { ColorPicker } from "./components/ColorPicker";
import { Orbit } from "./components/Orbit";
import { Dragable } from "./components/Dragable";
import { Physics } from "@react-three/cannon";

import Model from "./components/Model";
import BoundingBox from "./components/BoundingBox";

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
        camera={{ position: [50, 50, 50] }}
        shadows
      >
        <Orbit />
        <ambientLight intensity={0.2} />
        <axesHelper args={[200]} />
        <Bulb position={[0, 15, 0]} scale={10} />

        <Physics>
          {/* <Suspense fallback={null}>
            <Model
              path="/site-combined-model/Site_Combined_Clouds.gltf"
              position={[0, 11, 0]}
            />
          </Suspense> */}

          {/* <Suspense fallback={null}>
            <SiteCombinedModel position={[0, 11, 0]} />
          </Suspense> */}

          {/* Sun Model */}
          <Dragable>
            <Suspense fallback={null}>
              <BoundingBox
                // visible
                position={[4, 25, 0]}
                dims={[20, 20, 20]}
                // offset={[0, 0, 1]}
              >
                <Model path="/sun/scene.gltf" />
              </BoundingBox>
            </Suspense>
          </Dragable>

          <Floor position={[0, 0, 0]} />
        </Physics>

        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
