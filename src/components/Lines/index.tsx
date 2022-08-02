import { BufferAttribute } from "three";

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

export default Lines;
