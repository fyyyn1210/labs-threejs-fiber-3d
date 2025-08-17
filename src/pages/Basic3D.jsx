import {  Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

const Scene = ({ shape }) => {
  const styleCanvas = {
    height: "85vh",
    width: "90%",
    position: "absolute",
    top: "47%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
  }
  return (
    <Canvas style={styleCanvas}>
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
    <div className="bg-[#111827] h-screen">
      <Scene {...{ shape }}/>
      {/* Controlls */}
      <div className="absolute bottom-4 left-14 flex flex-row space-x-7 items-center p-3">
        {/* {JSON.stringify(shape)} */}
        <select className="text-white mt-1.5 w-[100px] border px-5 py-2 rounded-lg border-gray-300 sm:text-sm"
          onChange={(e) => {
            setShape(e.target.value);
          }}
        >
          <option value="square" className="text-gray-700">Square</option>
          <option value="circle" className="text-gray-700">Circle</option>
        </select>
        <div className="text-white text-lg">
          Hover over the box to stop rotation.
        </div>
      </div>
    </div>
  );
};

export default Basic3D;
