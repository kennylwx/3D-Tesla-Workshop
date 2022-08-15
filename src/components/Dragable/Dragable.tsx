import { DragControls } from "three/examples/jsm/controls/DragControls";
import {
  extend,
  ReactThreeFiber,
  ThreeElements,
  useThree,
} from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group, Object3D, Scene } from "three";
extend({ DragControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      dragControls: ReactThreeFiber.Object3DNode<
        DragControls,
        typeof DragControls
      >;
    }
  }
}

const Dragable = (props: ThreeElements["mesh"]) => {
  const { camera, gl, scene } = useThree();
  const groupRef = useRef<Group>(null);
  const controlsRef = useRef<DragControls>(null);

  const [children, setChildren] = useState<Object3D[]>([]);

  useEffect(() => {
    if (groupRef !== null) {
      if (groupRef.current !== null) {
        setChildren(groupRef.current.children);
      }
    }

    console.log(props.children);
  }, []);

  useEffect(() => {
    console.log(scene);
    if (controlsRef !== null) {
      if (controlsRef.current !== null) {
        controlsRef.current.addEventListener(
          "hoveron",
          (e) => (scene.orbitControls.enabled = false)
        );
      }
    }

    if (controlsRef !== null) {
      if (controlsRef.current !== null) {
        controlsRef.current.addEventListener(
          "hoveroff",
          (e) => (scene.orbitControls.enabled = true)
        );
      }
    }

    // Drag start
    // set mass to 0
    if (controlsRef !== null) {
      if (controlsRef.current !== null) {
        controlsRef.current.addEventListener("dragstart", (e) => {
          e.object.api?.mass.set(0);
        });
      }
    }
    // Drag end
    // set mass to 1
    if (controlsRef !== null) {
      if (controlsRef.current !== null) {
        controlsRef.current.addEventListener("dragend", (e) => {
          e.object.api?.mass.set(1);
        });
      }
    }

    // Drag
    // change the position
    // stop velocity (from falling)
    if (controlsRef !== null) {
      if (controlsRef.current !== null) {
        controlsRef.current.addEventListener("drag", (e) => {
          e.object.api?.position.copy(e.object.position);
          e.object.api?.velocity.set(0, 0, 0);
        });
      }
    }
  }, [children]);

  return (
    <group ref={groupRef}>
      <dragControls
        transformGroup={true}
        ref={controlsRef}
        args={[children, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};

export default Dragable;
