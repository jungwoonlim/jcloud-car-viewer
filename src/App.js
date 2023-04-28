import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Renderer } from './components/renderer/Renderer';
import { MainContainer } from './components/container/MainContainer';
import { Loading } from './components/container/Loading';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas shadows>
        <Renderer />
      </Canvas>
      <MainContainer />
    </Suspense>
  );
}

export default App;
