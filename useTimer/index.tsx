import React, { useEffect, useState } from "react";

const useTimer = (time: number | undefined): [{
    toggle: () => void;
    reset: () => void;
    seconds: number;
    isActive: boolean;
    isPaused: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
}] => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const toggle = (): void => {
    setIsActive(!isActive);
  };

  const reset = (): void => {
    setSeconds(0);
  };

  useEffect(() => {
    var interval: NodeJS.Timer | undefined = undefined;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, time ? time : 1000);
      if (seconds !== 0) {
        clearInterval(interval);
      }
    }
  }, [isActive, seconds, isPaused]);

    return [{
        toggle,
        reset,
        seconds,
        isActive,
        isPaused,
        setIsActive,
        setIsPaused,
        setSeconds,
    }];
};

export default useTimer;
