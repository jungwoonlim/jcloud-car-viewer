import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';
import { Loading } from './components/container/Loading';
import { Renderer } from './components/renderer/Renderer';
import { MainContainer } from './components/container/MainContainer';

export const App = () => {
  const { progress } = useProgress();

  return (
    <Suspense fallback={<Loading />}>
      <Canvas shadows>
        <Renderer />
      </Canvas>
      {progress >= 100 ? <MainContainer /> : <></>}
    </Suspense>
  );
};
