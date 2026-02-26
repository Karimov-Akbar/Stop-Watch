import { useMemo } from 'react';
import { formatTime } from '../../utils/formatTime';
import { useTimer } from '../../hooks/useTimer';
import TimerOptions from '../TimerOptions/TimerOptions';
import './TimerCard.css';

interface TimerCardProps {
    id: number;
    onRemove: (id: number) => void;
}

const TimerCard: React.FC<TimerCardProps> = ({ id, onRemove }) => {
    const { time, isRunning, toggle, reset } = useTimer();
    const formattedTime = useMemo(() => formatTime(time), [time]);

    return (
        <div className="timer-card">
            <button className="timer-remove" onClick={() => onRemove(id)}>✕</button>
            <p className="timer-display">{formattedTime}</p>
            <TimerOptions isRunning={isRunning} onToggle={toggle} onReset={reset} />
        </div>
    );
};

export default TimerCard;
