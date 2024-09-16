import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Diamond = ({ ...props }) => {
  const { nodes, materials } = useGLTF("/models/Diamond.glb");
  return (
    <group {...props} dispose={null} scale={5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stelated_Dodecahedron002.geometry}
        material={materials["Website  Glass Material"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_S001"].geometry}
        material={materials["S Black"]}
        position={[0.015, 0.017, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.256}
      />
    </group>
  );
};

export default Diamond;

useGLTF.preload("/models/Diamond.glb");
