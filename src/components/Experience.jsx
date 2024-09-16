import React, { useEffect } from "react";
import ExplodingCompound from "./ExplodingCompound";
import { useStep } from "../context/StepProvider";
import { useFrame, useThree } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { Vector3 } from "three";
import gsap from "gsap";
import Compound from "./Compound";
import Diamond from "./Diamond";
import Pent from "./Pent";
import Abstract from "./Abstract";
import ExplodingAbstract from "./ExplodingAbstract";
import ExplodingDiamond from "./ExplodingDiamond";
import ExplodingPent from "./ExplodingPent";

export const explodingAnimation = (actions) => {
  const action = actions["Animation"];

  action.reset().play().paused = true;

  const duration = action._clip.duration;

  gsap.fromTo(
    action,
    { time: 0 },
    {
      time: duration,
      ease: "none",
      scrollTrigger: {
        trigger: "#step0",
        start: "bottom bottom",
        endTrigger: "#step1",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
};

const Experience = () => {
  const { step } = useStep();
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(-3.5, 0, 5);
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        camera.position,
        { x: -3.5, z: 5 },
        {
          x: 0,
          z: 4,
          ease: "none",
          scrollTrigger: {
            trigger: "#step0",
            start: "top top",
            end: "30% top",
            scrub: true,
          },
        }
      );
    },
    {
      dependencies: [],
      revertOnUpdate: true,
    }
  );

  const activeModal = 0;

  if (step === 0 && activeModal === 0) return <Compound />;
  if (step === 0 && activeModal === 1) return <Abstract />;
  if (step === 0 && activeModal === 2) return <Diamond />;
  if (step === 0 && activeModal === 3) return <Pent />;

  if (step === 1 && activeModal === 0) return <ExplodingCompound />;
  if (step === 1 && activeModal === 1) return <ExplodingAbstract />;
  if (step === 1 && activeModal === 2) return <ExplodingDiamond />;
  if (step === 1 && activeModal === 3) return <ExplodingPent />;
};

export default Experience;
