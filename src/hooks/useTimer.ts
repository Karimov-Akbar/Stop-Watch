import { useState, useEffect, useRef, useCallback } from 'react';

interface UseTimerReturn {
    time: number;
    isRunning: boolean;
    toggle: () => void;
    reset: () => void;
    formatTime: (milliseconds: number) => string;
}

export const useTimer = (intervalMs: number = 10): UseTimerReturn => {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + intervalMs);
            }, intervalMs);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isRunning, intervalMs]);

    const toggle = useCallback((): void => setIsRunning(prev => !prev), []);
    const reset = useCallback((): void => {
        setIsRunning(false);
        setTime(0);
    }, []);

    const formatTime = useCallback((milliseconds: number): string => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const ms = milliseconds % 1000;

        return (
            `${String(minutes).padStart(2, '0')}:` +
            `${String(seconds).padStart(2, '0')}:` +
            `${String(ms).padStart(3, '0')}`
        );
    }, []);

    return { time, isRunning, toggle, reset, formatTime };
};
