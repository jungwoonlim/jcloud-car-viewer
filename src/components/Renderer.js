import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Ground } from "./Ground";
import { Car } from "./Car";
import { Ligth } from "./Light";

export const Renderer = () => {
  return (
    <>
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[4, 2, 4]} />
      <color args={[0, 0, 0]} attach="background" />
      <Ligth />
      <Ground />
      <Car />
    </>
  )
};
