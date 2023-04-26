import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Ground } from "./Ground";

export const Renderer = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[0, 0, 0]} attach="background" />
      <spotLight
        color={[1, 1, 1]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[10, 10, 10]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
    </>
  )
};
