import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Pent = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/PentagonalTrapezium.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} scale={5}>
      <group name="Scene">
        <mesh
          name="Pentagonal_Trap002"
          castShadow
          receiveShadow
          geometry={nodes.Pentagonal_Trap002.geometry}
          material={materials["Website  Glass Material"]}
          position={[0, 0.005, -0.009]}
          scale={0.418}
        />
        <mesh
          name="3D_S001"
          castShadow
          receiveShadow
          geometry={nodes["3D_S001"].geometry}
          material={materials["S Black"]}
          position={[0.015, 0.017, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.256}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/PentagonalTrapezium.glb");

export default Pent;
