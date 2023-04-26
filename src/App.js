import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Renderer } from './components/Renderer';
import { MainContainer } from './components/MainContainer';

function App() {
  return (
    <Suspense fallback={null}>
      <MainContainer />
      <Canvas shadows>
        <Renderer />
      </Canvas>
    </Suspense>
  );
}

export default App;
