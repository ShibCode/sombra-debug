import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Abstract = ({ ...props }) => {
  const { nodes, materials } = useGLTF("/models/Abstract.glb");
  return (
    <group {...props} dispose={null} scale={5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Abstract002.geometry}
        material={materials["Website  Glass Material"]}
        scale={0.41}
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

useGLTF.preload("/models/Abstract.glb");

export default Abstract;
