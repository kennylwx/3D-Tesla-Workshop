const ColorPicker: React.FC = () => {
  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
      <div style={{ background: "blue", height: 50, width: 50 }}></div>
      <div style={{ background: "yellow", height: 50, width: 50 }}></div>
      <div style={{ background: "white", height: 50, width: 50 }}></div>
    </div>
  );
};

export default ColorPicker;
