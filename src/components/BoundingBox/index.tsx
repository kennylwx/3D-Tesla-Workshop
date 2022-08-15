import { BoxProps, Triplet, useBox } from "@react-three/cannon";
import * as THREE from "three";

const BoundingBox = ({
  position = [0, 0, 0],
  offset = [0, 0, 0],
  dims = [1, 1, 1],
  visible = true,
  children,
}) => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    args: dims as Triplet,
    position: position as Triplet,
  }));
  return (
    <group ref={ref} api={api}>
      <mesh scale={dims} visible={visible}>
        <boxBufferGeometry />
        <meshPhysicalMaterial wireframe />
      </mesh>
      <group position={offset as Triplet}>{children}</group>
    </group>
  );
};

export default BoundingBox;
