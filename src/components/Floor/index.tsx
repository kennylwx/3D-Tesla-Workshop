import { ThreeElements, useLoader } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import THREE, { BufferGeometry, Material, Mesh } from "three";
import { BoxProps, useBox } from "@react-three/cannon";

const Floor = (props: ThreeElements["mesh"]) => {
  // const texture = useTexture("/grass.jpeg") as THREE.Texture;
  const [ref, api] = useBox<Mesh<BufferGeometry, Material | Material[]>>(
    () => ({ args: [500, 1, 500], ...props } as BoxProps)
  );

  return (
    <mesh ref={ref} {...props} castShadow receiveShadow scale={1}>
      <boxGeometry args={[500, 1, 500]} />
      <meshPhysicalMaterial color="#D8D8D8" />
    </mesh>
  );
};

export default Floor;
