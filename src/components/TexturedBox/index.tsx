import { ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import THREE from "three";

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

export default TexturedBox;
