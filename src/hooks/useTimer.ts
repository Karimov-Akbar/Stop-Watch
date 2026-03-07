import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { formatTime } from '../utils/formatTime';

interface UseTimerReturn {
    time: number;
    isRunning: boolean;
    toggle: () => void;
    reset: () => void;
    formattedTime: string;
}

export const useTimer = (intervalMs: number = 10): UseTimerReturn => {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const formattedTime = useMemo(() => formatTime(time), [time]);

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


    return { time, isRunning, toggle, reset, formattedTime };
};
