import { ThreeElements, useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type Props = {
  path: string;
};

const Model = (props: Props | ThreeElements["mesh"]) => {
  const model = useLoader(GLTFLoader, props.path);

  console.log(model);
  return <primitive object={model.scene} scale={props.scale} />;
};

export default Model;
