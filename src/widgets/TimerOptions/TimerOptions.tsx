import { memo } from "react";

interface TimerOptionsProps {
    isRunning: boolean;
    onToggle: () => void;
    onReset: () => void;
}

const TimerOptions = memo<TimerOptionsProps>(({ isRunning, onToggle, onReset }) => {
    return (
        <div className="timer__options">
            <button onClick={onToggle}>
                {isRunning ? 'Пауза' : 'Старт'}
            </button>
            <button onClick={onReset}>Рестарт</button>
        </div>
    );
});

export default TimerOptions;
