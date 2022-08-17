import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import useStore from "../../cameraStore";

const CameraControls = () => {
  const { cameraPos, shouldUpdate, setShouldUpdate, target } = useStore();

  const vec = new THREE.Vector3();
  useFrame(({ camera, scene }) => {
    if (shouldUpdate) {
      camera.position.lerp(cameraPos, 0.1);
      scene.orbitControls.target.lerp(target, 0.1);

      scene.orbitControls.update();
      const diff = camera.position.clone().sub(cameraPos).length();

      // console.log(diff);

      if (diff < 0.1) {
        setShouldUpdate(false);
      }
    }
  });

  return null;
};

export default CameraControls;
