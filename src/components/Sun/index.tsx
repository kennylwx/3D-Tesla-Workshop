import React, { Suspense } from "react";
import Model from "../Model";
import BoundingBox from "../BoundingBox";
import { Dragable } from "../Dragable";
import Bulb from "../Bulb";

const Sun = () => {
  return (
    <Dragable>
      <Suspense fallback={null}>
        <BoundingBox
          visible
          position={[4, 25, 0]}
          dims={[20, 20, 20]}
          // offset={[0, 0, 1]}
        >
          <Model path="/sun/scene.gltf" />
        </BoundingBox>
      </Suspense>
    </Dragable>
  );
};

export default Sun;
