import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Timer } from "lucide-react";

interface ControlsProps {
  onStart: () => void;
  onReset: () => void;
  onModeToggle: () => void;
  isRunning: boolean;
}

export default function Controls({
  onStart,
  onReset,
  onModeToggle,
  isRunning,
}: ControlsProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        variant="default"
        size="lg"
        onClick={onStart}
        className={`w-full max-w-xs transition-all duration-200 cursor-pointer ${
          isRunning
            ? "bg-orange-500 hover: bg-orange-600"
            : "bg-green-700 hover: bg-green-800"
        }
        `}
      >
        <span className="flex items-center gap-2 font-bold">
          {isRunning ? (
            <Pause className="w-t h-5" />
          ) : (
            <Play className="w-t h-5" />
          )}
          {isRunning ? "Stop" : "Start"}
        </span>
      </Button>
      <div className="flex gap-3 w-full max-w-xs">
        <Button
          variant="secondary"
          size="lg"
          onClick={onReset}
          className="w-1/2 group bg-gray-100 hover: bg-gray-200 cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
            Reset
          </span>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={onModeToggle}
          className="w-1/2 group bg-gray-100 hover: bg-gray-200 cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Timer className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"></Timer>
            Switch Mode
          </span>
        </Button>
      </div>
    </div>
  );
}
