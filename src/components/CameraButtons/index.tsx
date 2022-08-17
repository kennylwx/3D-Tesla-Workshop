import React, { useEffect, useState } from "react";
import * as THREE from "three";
import useStore from "../../cameraStore";

const style = {
  zIndex: 1,
  position: "absolute",
  bottom: "30vh",
  height: "30px",
  width: "30px",
  background: "white",
  textAlign: "center",
  borderRadius: "100%",
  fontSize: 20,
  fontWeight: "bold",
  opacity: 0.7,
  border: "1px solid black",
  cursor: "pointer",
};

type CameraPositionSets = {
  cameraPos: THREE.Vector3;
  target: THREE.Vector3;
};

const NEXT = "NEXT";
const PREV = "PREV";

type SelectionType = "NEXT" | "PREV";

const CameraButtons = () => {
  const { cameraPos, setCameraPos, setTarget, setShouldUpdate } = useStore();
  const [currentShoot, setCurrentShoot] = useState<number>(0);

  const shootList: CameraPositionSets[] = [
    {
      cameraPos: new THREE.Vector3(-120, 10, -100),
      target: new THREE.Vector3(-80, 0, -60),
    },
    {
      cameraPos: new THREE.Vector3(100, 100, 100),
      target: new THREE.Vector3(100, 0, 0),
    },
    {
      cameraPos: new THREE.Vector3(50, 100, 30),
      target: new THREE.Vector3(200, 0, 0),
    },
    {
      cameraPos: new THREE.Vector3(100, 200, 100),
      target: new THREE.Vector3(50, 0, 0),
    },
  ];

  const handleClick = (selection: SelectionType) => {
    switch (selection) {
      case NEXT:
        if (currentShoot + 1 >= shootList.length) {
          setCurrentShoot(0);
        } else {
          setCurrentShoot(currentShoot + 1);
        }
        break;
      case PREV:
        if (currentShoot - 1 < 0) {
          setCurrentShoot(shootList.length - 1);
        } else {
          setCurrentShoot(currentShoot - 1);
        }
        break;
      default:
        break;
    }

    setShouldUpdate(true);
  };

  useEffect(() => {
    console.log(currentShoot);
    setCameraPos(shootList[currentShoot].cameraPos);
    setTarget(shootList[currentShoot].target);
  }, [currentShoot]);

  return (
    <>
      <button
        onClick={(e) => handleClick(PREV)}
        style={{
          left: "40vw",
          ...style,
        }}
      >
        {"<"}
      </button>
      <button
        onClick={(e) => handleClick(NEXT)}
        style={{
          right: "40vw",
          ...style,
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
