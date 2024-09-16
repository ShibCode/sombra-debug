import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { explodingAnimation } from "./Experience";
import { useGSAP } from "@gsap/react";

const ExplodingDiamond = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/ExplodingDiamond.glb"
  );
  const { actions } = useAnimations(animations, group);

  useGSAP(
    () => {
      explodingAnimation(actions);
    },
    { dependencies: [], revertOnUpdate: true }
  );

  return (
    <group ref={group} {...props} dispose={null} scale={5}>
      <group name="Scene">
        <group name="Empty004">
          <mesh
            name="Stelated_Dodecahedron001_cell"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.261, -0.03, 0.138]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell001"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell001.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.251, 0.018, -0.148]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell002"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell002.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.194, 0.036, -0.176]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell003"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell003.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.115, -0.137, 0.093]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell004"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell004.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.048, -0.16, 0.259]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell005"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell005.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.024, 0.22, 0.026]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell006"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell006.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.262, -0.002, -0.154]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell007"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell007.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.195, 0.044, 0.027]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell008"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell008.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.037, -0.097, 0.256]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell009"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell009.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.232, 0.055, 0.084]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell010"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell010.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.202, 0.066, -0.014]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell011"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell011.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.171, -0.041, -0.096]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell012"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell012.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.003, -0.18, 0.292]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell013"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell013.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.066, 0.122, 0.098]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell014"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell014.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.111, -0.011, 0.185]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell015"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell015.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.257, 0.009, 0.169]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell016"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell016.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.003, -0.165, -0.254]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell017"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell017.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.107, -0.06, 0.19]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell018"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell018.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.205, 0.039, 0.168]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell019"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell019.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.132, 0.125, -0.109]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell020"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell020.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.028, 0.13, 0.214]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell021"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell021.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.168, 0.187, 0.035]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell022"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell022.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.097, -0.138, -0.1]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell023"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell023.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.013, -0.022, 0.208]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell024"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell024.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.121, -0.242, -0.034]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell025"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell025.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.19, -0.062, 0.114]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell026"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell026.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.032, 0.112, -0.211]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell027"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell027.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.1, -0.136, 0.127]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell028"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell028.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.038, 0.046, -0.243]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell029"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell029.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.197, 0.118, 0]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell030"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell030.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.005, -0.194, 0.105]}
          />
          <group
            name="Stelated_Dodecahedron001_cell031"
            position={[-0.009, 0.196, 0.122]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell032"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell032.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.193, -0.108, 0.056]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell033"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell033.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.113, 0.275, 0.016]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell034"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell034.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.231, -0.061, 0.174]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell036"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell036.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.185, -0.11, -0.008]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell037"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell037.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.162, 0.25, -0.003]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell038"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell038.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.171, -0.095, -0.077]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell039"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell039.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.095, 0.024, -0.158]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell040"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell040.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.122, -0.241, -0.004]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell041"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell041.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.046, -0.156, 0.205]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell042"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell042.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.208, 0.292, -0.009]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell043"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell043.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.166, -0.092, -0.14]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell045"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell045.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.3, 0.012, 0.176]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell046"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell046.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.039, 0.194, -0.104]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell047"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell047.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.201, -0.328, -0.005]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell048"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell048.geometry}
            material={materials["Website  Glass Material"]}
            position={[-0.183, -0.029, 0.071]}
          />
          <mesh
            name="Stelated_Dodecahedron001_cell049"
            castShadow
            receiveShadow
            geometry={nodes.Stelated_Dodecahedron001_cell049.geometry}
            material={materials["Website  Glass Material"]}
            position={[0.122, 0.16, 0.07]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/ExplodingDiamond.glb");

export default ExplodingDiamond;
