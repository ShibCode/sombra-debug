import { createContext, useContext, useEffect, useState } from "react";

const StepContext = createContext();

export const useStep = () => useContext(StepContext);

const StepProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  const handleScroll = () => {
    const step0Spacer = document.querySelector("#step0");

    if (
      window.scrollY >
      step0Spacer.getBoundingClientRect().height - window.innerHeight
    ) {
      setStep(1);
    } else setStep(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StepContext.Provider value={{ step }}>{children}</StepContext.Provider>
  );
};

export default StepProvider;
