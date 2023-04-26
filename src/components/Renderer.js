import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Ground } from "./Ground";
import { Car } from "./Car";

export const Renderer = () => {
  const ligthPos = [5, 5, 0];

  return (
    <>
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[4, 2, 4]} />
      <color args={[0, 0, 0]} attach="background" />
      <spotLight
        color={[1, 1, 1]}
        intensity={1}
        angle={0.6}
        penumbra={0.5}
        position={ligthPos}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
      <Car />
    </>
  )
};
