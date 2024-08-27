import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function TeaGlass() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Vaso */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 0.8, 2, 32]} />
        <meshPhysicalMaterial
          color="white"
          roughness={0.1}
          transmission={1}
          thickness={0.1}
          opacity={0.5}
          transparent={true}
        />
      </mesh>

      {/* Vaso Int */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.9, 0.7, 2, 32]} />
        <meshPhysicalMaterial
          color="white"
          roughness={0.1}
          transmission={1}
          thickness={0.2}
          opacity={0.6}
          transparent={true}
        />
      </mesh>

      {/* Líquido */}
      {/* <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.78, 1.18, 1.6, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          opacity={0.85}
          transparent={true}
        />
      </mesh> */}

      <OrbitControls />
    </Canvas>
  );
}

export default TeaGlass;
