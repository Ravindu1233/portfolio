import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Trail } from "@react-three/drei";
import * as THREE from "three";

const FloatingTorus = ({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.5;
    ref.current.rotation.y += 0.005 * speed;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.8, 0.3, 16, 32]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} transparent opacity={0.7} />
    </mesh>
  );
};

const FloatingIcosahedron = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.003;
    ref.current.rotation.z += 0.005;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.4;
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.9} wireframe transparent opacity={0.5} />
    </mesh>
  );
};

const GlowSphere = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1);
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={ref} position={[0, 0, -2]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial color="#22c55e" roughness={0.1} metalness={0.9} distort={0.3} speed={2} transparent opacity={0.15} />
      </mesh>
    </Float>
  );
};

const OrbitingParticle = ({ radius, speed, offset, color }: { radius: number; speed: number; offset: number; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 2) * 0.5;
  });
  return (
    <Trail width={0.05} length={6} color={color} attenuation={(w) => w * w}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Trail>
  );
};

const FloatingParticles = ({ count = 80 }: { count?: number }) => {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.02;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#22c55e" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const CameraRig = () => {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(t * 0.1) * 0.5;
    state.camera.position.y = Math.cos(t * 0.08) * 0.3;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

const Scene3D = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#0a1510"]} />
        <fog attach="fog" args={["#0a1510", 5, 18]} />

        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#22c55e" />
        <pointLight position={[-5, -3, 3]} intensity={0.5} color="#4ade80" />
        <directionalLight position={[0, 5, 5]} intensity={0.4} />

        <GlowSphere />
        <FloatingTorus position={[-3, 1.5, -1]} color="#16a34a" speed={0.8} />
        <FloatingTorus position={[3.5, -1, -3]} color="#4ade80" speed={1.2} />
        <FloatingIcosahedron position={[2.5, 2, -2]} color="#22c55e" />
        <FloatingIcosahedron position={[-2.5, -1.5, -1.5]} color="#86efac" />

        <OrbitingParticle radius={3} speed={0.3} offset={0} color="#22c55e" />
        <OrbitingParticle radius={3.5} speed={0.25} offset={Math.PI} color="#4ade80" />
        <OrbitingParticle radius={2.5} speed={0.35} offset={Math.PI / 2} color="#86efac" />

        <FloatingParticles count={100} />
        <Stars radius={80} depth={50} count={1000} factor={3} saturation={0} fade speed={0.5} />

        <CameraRig />
      </Canvas>
    </div>
  );
};

export default Scene3D;
