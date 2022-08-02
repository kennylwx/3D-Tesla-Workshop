import THREE, { BufferAttribute } from "three";

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

export default Triangle;
