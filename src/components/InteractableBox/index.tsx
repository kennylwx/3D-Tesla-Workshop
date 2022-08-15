import { useTexture } from "@react-three/drei";
import {
  ThreeElements,
  ThreeEvent,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { useRef } from "react";
import THREE, { BufferGeometry, Material, Mesh } from "three";
import useStore from "../../globalStore";
import { BoxProps, useBox } from "@react-three/cannon";

const InteractableBox = (props: ThreeElements["mesh"]) => {
  const { activeMesh, setActiveMesh, color } = useStore();

  // const ref = useRef<THREE.Mesh>(null!);
  const [ref, api] = useBox<Mesh<BufferGeometry, Material | Material[]>>(
    () => ({ mass: 1, ...props } as BoxProps)
  );

  const texture = useTexture("/wood.jpeg");

  // useFrame((state) => {
  //   if (ref.current !== null) {
  //     ref.current.rotation.x += 0.01;
  //     ref.current.rotation.y += 0.01;
  //   }
  // });

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    console.log(e);
    setActiveMesh(true);
    if (activeMesh) {
      scaleDown(e.object);
    }
  };

  const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
    scaleUp(e.object);
  };

  const handlePointerLeave = (e: ThreeEvent<PointerEvent>) => {
    if (!activeMesh) {
      scaleDown(e.object);
    }
  };

  const scaleUp = (object: THREE.Object3D) => {
    object.scale.x = 1.5;
    object.scale.y = 1.5;
    object.scale.z = 1.5;
  };

  const scaleDown = (object: THREE.Object3D) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };

  return (
    <mesh
      ref={ref}
      api={api}
      {...props}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxGeometry />
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial map={texture} color={color} />
    </mesh>
  );
};

export default InteractableBox;
