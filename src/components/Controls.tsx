import { Button } from "@/components/ui/button";

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
      <Button variant="default" size="lg" onClick={onStart}>
        {isRunning ? "Stop" : "Start"}
      </Button>
      <Button variant="secondary" size="lg" onClick={onReset}>
        Reset
      </Button>
      <Button
        variant="ghost"
        onClick={onModeToggle}
        className="text-muted-foreground"
      >
        Switch Mode
      </Button>
    </div>
  );
}
