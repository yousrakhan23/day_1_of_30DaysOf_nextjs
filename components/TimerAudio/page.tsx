"use client"

import { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const audio = new Audio('/assets/mixkit-slow-tick-tock-clock-timer-1050.wav')

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
        if (seconds >= 59) {
          audio.play(); 
          setSeconds(0); 
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds, audio]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>{seconds} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerComponent;
