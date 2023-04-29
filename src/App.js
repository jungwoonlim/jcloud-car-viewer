import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Renderer } from './components/renderer/Renderer';
import { MainContainer } from './components/container/MainContainer';
import { Loading } from './components/container/Loading';

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas shadows>
        <Renderer />
      </Canvas>
      <MainContainer />
    </Suspense>
  );
};
