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

    return (
        <div className="timer-card">
            <button className="timer-remove" onClick={() => onRemove(id)}>✕</button>
            <p className="timer-display">{formatTime(time)}</p>
            <TimerOptions isRunning={isRunning} onToggle={toggle} onReset={reset} />
        </div>
    );
};

export default TimerCard;
