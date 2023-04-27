export const Ligth = () => {
  const position = [5, 5, 0];

  return (
    <>
      <spotLight
        color={[1, 1, 1]}
        intensity={0.5}
        angle={0.5}
        penumbra={0.5}
        position={position}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={0.3}
        angle={0.9}
        penumbra={0.1}
        position={position}
        castShadow
      />
    </>
  );
};
