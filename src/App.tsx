import { useState } from 'react';
import TimerCard from './widgets/TImerCard/TimerCard';
import './widgets/TimerOptions/TimerOptions.css';

const App: React.FC = () => {
    const [timerIds, setTimerIds] = useState<number[]>([Date.now()]);

    const addTimer = (): void => {
        setTimerIds(prev => [...prev, Date.now()]);
    };

    const removeTimer = (id: number): void => {
        setTimerIds(prev => prev.filter(timerId => timerId !== id));
    };

    return (
        <div className="app">
            <h1>Таймер</h1>
            <button className="add-timer-btn" onClick={addTimer}>
                + Добавить таймер
            </button>
            <div className="timers-list">
                {timerIds.map(id => (
                    <TimerCard key={id} id={id} onRemove={removeTimer} />
                ))}
            </div>
        </div>
    );
};

export default App;
