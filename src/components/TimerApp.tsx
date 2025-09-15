'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TimerDisplay from "@/components/TimerDisplay";

export default function TimerApp() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Work Time</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <TimerDisplay minutes={25} seconds={0} />
                </CardContent>
            </Card>
        </div>
    );
}