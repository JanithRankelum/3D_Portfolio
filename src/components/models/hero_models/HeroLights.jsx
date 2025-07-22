

const HeroLights = () => {
  return (
    <>
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <ambientLight intensity={0.5} />
    </>
  );
};

export default HeroLights;
