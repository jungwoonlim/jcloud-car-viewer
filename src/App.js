import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Renderer } from './components/renderer/Renderer';
import { MainContainer } from './components/container/MainContainer';

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Canvas shadows>
        <Renderer />
      </Canvas>
      <MainContainer />
    </Suspense>
  );
}

export default App;
