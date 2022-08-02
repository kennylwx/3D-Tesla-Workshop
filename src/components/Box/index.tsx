import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import THREE from "three";

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

export default Box;
