import { useMemo, useRef, Suspense } from "react";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  ReactThreeFiber,
  ThreeElements,
  useLoader,
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

const Triangle = () => {
  const vertices = new Float32Array([0, 0, 0, 0, 1, 1, 0, 1, -1]);
  const verticesAttribute = new BufferAttribute(vertices, 3);

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" {...verticesAttribute} />
      </bufferGeometry>
      <meshBasicMaterial color={"hotpink"} side={THREE.DoubleSide} />
    </mesh>
  );
};

const Lines = () => {
  const vertices = new Float32Array([2, 3, 2, 4, 3, 3, 2, -2, 2]);
  const verticesAttribute = new BufferAttribute(vertices, 3);

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" {...verticesAttribute} />
      </bufferGeometry>
      <lineBasicMaterial color={"hotpink"} />
    </line>
  );
};

const Box = (props: ThreeElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    // console.log(state);
    if (ref.current !== null) {
      // ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} {...props} castShadow>
      <boxGeometry />
      <meshPhysicalMaterial
        color="white"
        opacity={0.7}
        transparent
        // wireframe
        // metalness={1}
        roughness={0}
        clearcoat={1}
        transmission={0.5}
        reflectivity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const Floor = (props: ThreeElements["mesh"]) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[10, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props: ThreeElements["mesh"]) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

const TexturedBox = (props: ThreeElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, "/wood.jpeg");

  useFrame((state) => {
    // console.log(state);
    if (ref.current !== null) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} {...props} castShadow>
      <boxGeometry />
      <sphereBufferGeometry args={[1, 100, 100]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};

const Background = (props: ThreeElements["mesh"]) => {
  const texture = useLoader(THREE.TextureLoader, "/lake.jpeg");

  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return <primitive attach="background" object={texture} {...props} />;
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [5, 5, 5] }}
        shadows
      >
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />

        <Suspense fallback={null}>
          <TexturedBox position={[0, 1, 0]} />
        </Suspense>

        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0, -0.5, 0]} receiveShadow />
      </Canvas>
    </div>
  );
}

export default App;
