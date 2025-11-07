"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import ThreeGlobe from "three-globe";

function GlobeObject() {
  // Create the ThreeGlobe instance once
  const globe = useMemo(() => {
    const g = new ThreeGlobe() as unknown as any; // chainable API isn't perfectly typed
    g.globeImageUrl("https://unpkg.com/three-globe/example/img/earth-dark.jpg")
      .bumpImageUrl(
        "https://unpkg.com/three-globe/example/img/earth-topology.png",
      )
      .atmosphereColor("#7dd3fc")
      .atmosphereAltitude(0.15);

    // optional: sample arcs/points data later with g.arcsData / g.pointsData
    return g as unknown as THREE.Object3D;
  }, []);

  // Slow spin “agency vibe”
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.0008;
  });

  return (
    <group ref={groupRef}>
      {/* Attach the ThreeGlobe object to the scene */}
      <primitive object={globe} />
    </group>
  );
}

export default function Globe3D() {
  return (
    <div className="relative w-full h-[520px] rounded-2xl border border-white/10 overflow-hidden bg-neutral-950">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} />
        <GlobeObject />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={false}
        />
      </Canvas>
      {/* soft radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_60%)]" />
    </div>
  );
}
