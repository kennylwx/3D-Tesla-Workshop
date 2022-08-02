import { ThreeElements, useLoader } from "@react-three/fiber";
import THREE from "three";

const Background = (props: ThreeElements["mesh"]) => {
  const texture = useLoader(THREE.TextureLoader, "/test-1.png");

  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return <primitive attach="background" object={texture} {...props} />;
};

export default Background;
