import { ThreeElements, useLoader } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import THREE from "three";

const Floor = (props: ThreeElements["mesh"]) => {
  // const texture = useTexture("/grass.jpeg") as THREE.Texture;

  return (
    <mesh {...props} castShadow receiveShadow scale={1}>
      <boxGeometry args={[500, 1, 500]} />
      <meshPhysicalMaterial color="#D8D8D8" />
    </mesh>
  );
};

export default Floor;
