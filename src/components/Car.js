import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Car = () => {
  const model = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + 'model/scene.gltf',
  );
  
  useEffect(() => {
    model.scene.scale.set(1.25, 1.25, 1.25);
    model.scene.position.set(0.75, 0.535, 0);
    model.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [model]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const group = model.scene.children[0].children[0].children[0].children[0];

    group.children[1].rotation.x = time * 2;
    group.children[2].rotation.x = time * 2;
    group.children[3].rotation.x = time * 2;
    group.children[4].rotation.x = time * 2;
  });

  return <primitive object={model.scene} />;
};
