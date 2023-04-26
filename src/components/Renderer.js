import { PerspectiveCamera } from "@react-three/drei";

const initState = {
  position: [3, 2, 5],
};

export const Renderer = () => {
  const { position }= initState;


  return (
    <>
      <PerspectiveCamera makeDefault fov={50} position={position} />
      <color args={[0, 0, 0]} attach="background" />
    </>
  )
};
