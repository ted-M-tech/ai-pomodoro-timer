import { Button } from "@/components/ui/button";

interface ControlsProps {
    onStart: () => void;
    onReset: () => void;
    isRunning: boolean;
}

export default function Controls({ onStart, onReset, isRunning}: ControlsProps) {
    return (
        <div className="flex gap-4">
            <Button variant="default" size="lg" onClick={onStart}>
                {isRunning ? 'Stop' : 'Start'}
            </Button>
            <Button variant="secondary" size="lg" onClick={onReset}>Reset</Button>
        </div>
    );
}