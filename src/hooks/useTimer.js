import { useState, useEffect, useRef } from 'react';

export const useTimer = (intervalMs = 10) => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

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

    const toggle = () => setIsRunning(prev => !prev);
    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return { time, isRunning, toggle, reset };
};