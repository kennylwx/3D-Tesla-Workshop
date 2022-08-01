import { useMemo, useRef } from "react";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  ReactThreeFiber,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { BufferAttribute } from "three";
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

const Box = (props) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    // console.log(state);
    if (ref.current !== null) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};

function App() {
  // const count = 10;

  // const points = useMemo(() => {
  //   const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5);

  //   console.log(p);

  //   const res = new BufferAttribute(new Float32Array(p), 3);
  //   console.log(res);
  //   return res;
  // }, [count]);

  const vertices = new Float32Array([0, 0, 0, 0, 1, 1, 0, 1, -1]);
  const verticesAttribute = new BufferAttribute(vertices, 3);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas style={{ background: "black" }} camera={{ position: [3, 3, 3] }}>
        <Orbit />
        <axesHelper args={[3]} />
        <Box position={[-1, 1, 2]} />
        <line>
          <bufferGeometry>
            {/* <bufferAttribute
              attach="attributes"
              array={new Float32Array([0, 1, 2])}
            /> */}
            <bufferAttribute
              attach="attributes-position"
              {...verticesAttribute}
            />
            <meshBasicMaterial attach="material" color="red" />
          </bufferGeometry>
          <lineBasicMaterial color={"hotpink"} />
        </line>
      </Canvas>
    </div>
  );
}

export default App;
