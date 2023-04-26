import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Renderer } from './components/Renderer';
import { MainContainer } from './components/MainContainer';

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
