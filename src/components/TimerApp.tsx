"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import TimerDisplay from "@/components/TimerDisplay";
import Controls from "@/components/Controls";
import MetadataUpdater from "./MetadataUpdater";
import { useState, useEffect } from "react";
import { playNotificationSound } from "@/utils/sound";

// Define mode type
type Mode = "work" | "break";

export default function TimerApp() {
  // state of running
  const [isRunning, setIsRunning] = useState(false);

  const [workDuration, setWorkDuration] = useState(25);

  // state to keep time left
  const [timeLeft, setTimeLeft] = useState({
    minutes: workDuration,
    seconds: 0,
  });

  // state tp manage mode
  const [mode, setMode] = useState<Mode>("work");

  // function to change mode
  const toggleMode = () => {
    // switch mode
    const newMode = mode === "work" ? "break" : "work";
    setMode(newMode);
    // reset timer depends on mode
    setTimeLeft({
      minutes: newMode === "work" ? workDuration : 5,
      seconds: 0,
    });
    // stop timer
    setIsRunning(false);
  };

  // handler of start button
  const handleStart = () => {
    setIsRunning(!isRunning);
  };

  // handler of reset button
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft({
      minutes: mode === "work" ? workDuration : 5,
      seconds: 0,
    });
  };

  useEffect(() => {
    // variable to keep return value of setInterval
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => {
          // case: seconds = 0
          if (prev.seconds === 0) {
            // case: minutes = 0
            if (prev.minutes === 0) {
              setIsRunning(false);
              toggleMode();
              void playNotificationSound();
              return prev;
            }
            // minutes is still left, decrease 1 from minutes and reset seconds to 59
            return { minutes: prev.minutes - 1, seconds: 59 };
          }
          return { ...prev, seconds: prev.seconds - 1 };
        });
      }, 1); // to check behavior, change time speed
    }
    // clean up function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {mode === "work" ? "Work Time" : "Rest Time"}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <TimerDisplay
            minutes={timeLeft.minutes}
            seconds={timeLeft.seconds}
            mode={mode}
          />
          <Controls
            onStart={handleStart}
            onReset={handleReset}
            onModeToggle={toggleMode}
            isRunning={isRunning}
          />
        </CardContent>
        <CardFooter className="flex justify-center gap-2 items-center">
          <label className="text-sm font-medium">work time</label>
          <select
            value={workDuration}
            onChange={(e) => {
              const newDuration = parseInt(e.target.value);
              setWorkDuration(newDuration);
              if (mode === "work" && !isRunning) {
                setTimeLeft({ minutes: newDuration, seconds: 0 });
              }
            }}
            className="p-2 border border-gray-300 rounded-md focus:outline-none
            focus:ring-2 focus:ring-blue-500"
          >
            {[5, 10, 15, 30, 45, 60].map((minutes) => (
              <option key={minutes} value={minutes}>
                {minutes}min
              </option>
            ))}
          </select>
        </CardFooter>
      </Card>
      <MetadataUpdater
        minutes={timeLeft.minutes}
        seconds={timeLeft.seconds}
        mode={mode}
      />
    </div>
  );
}
