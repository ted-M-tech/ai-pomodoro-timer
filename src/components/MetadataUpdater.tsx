import { time } from "console";
import { useEffect } from "react";

interface MetadataUpdaterProps {
    minutes: number;
    seconds: number;
    mode: 'work' | 'break';
}

export default function MetadataUpdater ({ minutes, seconds, mode }: MetadataUpdaterProps) {
    useEffect(() => {
        const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        const modeString = mode === 'work' ? 'work' : 'rest';
        // Update title
        document.title = `(${timeString}) ${modeString} - AI Pomodoro Timer`;
    }, [minutes, seconds, mode]
    );
    return null;
}