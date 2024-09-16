import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Hero = () => {
  const tagline = useRef();
  const purpleLine = useRef();
  const button = useRef();

  // useGSAP(
  //   () => {
  //     const getLine = (line) => {
  //       return [
  //         ...document.querySelectorAll(`.line-${line} .letter`),
  //       ].reverse();
  //     };

  //     const line1 = getLine(1);
  //     const line2 = getLine(2);
  //     const line3 = getLine(3);

  //     const from = { opacity: 1, rotate: 0, yPercent: 0, x: 0 };
  //     const to = {
  //       opacity: 0,
  //       rotate: -50,
  //       transformOrigin: "left",
  //       ease: "power4.out",
  //       stagger: 0.06,
  //     };

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#step0",
  //         start: "top top",
  //         end: "45% top",
  //         scrub: true,
  //       },
  //     });

  //     tl.fromTo(line3, from, {
  //       transformOrigin: "left",
  //       ease: "power4.out",
  //       stagger: 0.06,
  //       xPercent: -300,
  //       duration: 0.5,
  //     })
  //       .fromTo(line3, from, { ...to, yPercent: -200, duration: 0.3 }, "<")
  //       .fromTo(
  //         line2,
  //         from,
  //         {
  //           transformOrigin: "left",
  //           ease: "power4.out",
  //           stagger: 0.06,
  //           xPercent: -200,
  //           duration: 0.45,
  //         },
  //         "-=0.29"
  //       )
  //       .fromTo(line2, from, { ...to, yPercent: -100, duration: 0.275 }, "<")

  //       .fromTo(
  //         line1,
  //         from,
  //         {
  //           transformOrigin: "left",
  //           ease: "power4.out",
  //           stagger: 0.06,
  //           xPercent: -100,
  //           duration: 0.4,
  //         },
  //         "-=0.34"
  //       )
  //       .fromTo(
  //         line1,
  //         from,
  //         {
  //           ...to,
  //           yPercent: -0,
  //           duration: 0.25,
  //         },
  //         "<"
  //       );

  //     gsap.to([button.current, tagline.current, purpleLine.current], {
  //       opacity: 0,
  //       y: 50,
  //       ease: "none",
  //       duration: 0.25,
  //       scrollTrigger: {
  //         trigger: "#home",
  //         start: "+50px top",
  //         toggleActions: "play none none reverse",
  //       },
  //     });
  //   },
  //   { dependencies: [], revertOnUpdate: true }
  // );

  return (
    <div className="w-full h-screen flex items-center px-[8%] sticky top-0">
      <div className="flex flex-col gap-6">
        <h1 className="text-[100px] leading-none font-medium">
          <span className="line-1">
            <span className="letter inline-block">H</span>
            <span className="letter inline-block">I</span>
          </span>
          <br />
          <span className="line-2">
            <span className="letter inline-block">W</span>
            <span className="letter inline-block">E</span>{" "}
            <span className="letter inline-block">A</span>
            <span className="letter inline-block">R</span>
            <span className="letter inline-block">E</span>
          </span>
          <br />
          <span className="line-3">
            <span className="letter inline-block">S</span>
            <span className="letter inline-block">O</span>
            <span className="letter inline-block">M</span>
            <span className="letter inline-block">B</span>
            <span className="letter inline-block">R</span>
            <span className="letter inline-block">A</span>{" "}
            <span className="letter inline-block">L</span>
            <span className="letter inline-block">A</span>
            <span className="letter inline-block">B</span>
            <span className="letter inline-block">S</span>
          </span>
        </h1>

        <div className="flex items-center gap-2">
          <p
            ref={tagline}
            className="text-3xl font-medium font-archivo leading-none"
          >
            Illuminate{" "}
            <span className="border-2 border-black rounded-lg p-1">
              the beyound
            </span>
          </p>

          <div
            ref={purpleLine}
            className="h-[2px] flex-grow bg-[#ec00de] rounded-full"
          ></div>
        </div>

        <button
          ref={button}
          className="bg-[#ec00de] text-white text-2xl rounded-xl h-[50px] px-5 leading-none ml-auto mt-6"
        >
          Show Reel
        </button>
      </div>
    </div>
  );
};

export default Hero;
