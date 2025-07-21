import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Phoenix } from "./Phoenix";

const HeroExperience = () => {
  const istablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const ismobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <OrbitControls 
        enablePan={false}
        enableZoom={!istablet}
        maxDistance={90}
        minDistance={75}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]} // ensure it looks at the center
      />

      <group
        scale={ismobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[Math.PI / 6.6, Math.PI / 1.3, 0]}
      >
        <Phoenix />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
