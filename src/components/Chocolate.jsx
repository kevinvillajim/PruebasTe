import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Chocolate() {
  const { scene } = useGLTF("/splash.glb"); // Ruta correcta a tu modelo
  const texture = useLoader(THREE.TextureLoader, "/agua.jpg"); // Ruta a tu textura

  // Aplica la textura a cada material en el modelo
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture;
    }
  });

  return (
    <primitive
      object={scene}
      scale={100}
      position={[0, -1, 0]}
    />
  );
}

function Choco() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{
        position: [30, 30, 30], // Aleja la cámara del centro de la escena
        fov: 100, // Ajusta el campo de visión para ver más o menos de la escena
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <Chocolate />

      <OrbitControls />
    </Canvas>
  );
}

export default Choco;
