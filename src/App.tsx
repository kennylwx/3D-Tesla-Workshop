import { useRef } from "react";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  ReactThreeFiber,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

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

const Box = () => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    console.log(state);
    if (ref.current !== null) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas style={{ background: "black" }} camera={{ position: [3, 3, 3] }}>
        {/* <Box /> */}
        <Orbit />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
}

export default App;
