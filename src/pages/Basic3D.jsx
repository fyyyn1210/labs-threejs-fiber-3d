import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

const Scene = ({ shape }) => {
  return (
    <Canvas style={{ height: "90vh" }}>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" background />
      <Suspense fallback={<div>Loading 3D Model...</div>}>
        <Model {...{ shape }} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};
const Model = ({ shape }) => {
  const ref = useRef();
  const [isHover, setHover] = useState(false);
  useFrame((state, delta) => {
    if (!isHover) {
      ref.current.rotation.y += delta;
      ref.current.rotation.x += delta;
    }
  });
  // frames
  const changeColorWhenClick = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (ref.current) {
      ref.current.material.color.set(randomColor);
      setHover(false);
    }
  };
  return (
    <mesh
      ref={ref}
      scale={[2, 2, 2]}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setHover(false);
      }}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onClick={changeColorWhenClick}
    >
      {shape == "square" && <boxGeometry args={[1, 1, 1]} />}
      {shape == "circle" && <sphereGeometry args={[1, 32, 32]} />}
      
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};
const Basic3D = () => {
  const [shape, setShape] = useState("square");
  return (
    <>
      <Scene {...{ shape }} />
      {/* Controlls */}
      <div className="flex flex-row space-x-7 items-center p-3">
        {/* {JSON.stringify(shape)} */}
        <select
          onChange={(e) => {
            setShape(e.target.value);
          }}
        >
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <div className="text-black text-lg">
          Hover over the box to stop rotation.
        </div>
      </div>
    </>
  );
};

export default Basic3D;
