import React from "react";
import useStore from "../../globalStore";

const WHITE = "white";
const YELLOW = "yellow";
const BLUE = "blue";

function ColorPicker() {
  const { setColor } = useStore();

  const handleClick = (color: string) => {
    setColor(color);
  };
  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
      <div
        onClick={() => {
          handleClick(BLUE);
        }}
        style={{ background: BLUE, height: 50, width: 50 }}
      />
      <div
        onClick={() => {
          handleClick(YELLOW);
        }}
        style={{ background: YELLOW, height: 50, width: 50 }}
      />
      <div
        onClick={() => {
          handleClick(WHITE);
        }}
        style={{ background: WHITE, height: 50, width: 50 }}
      />
    </div>
  );
}

export default ColorPicker;
