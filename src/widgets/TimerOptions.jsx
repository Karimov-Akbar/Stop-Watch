import { formatTime } from '../utils/formatTime';
import './TimerOptions.css'

const TimerOptions = ({ toggle, reset, time, isRunning }) => {

    return(
        <div className="container">
            <h1>Таймер</h1>
            <p>{formatTime(time)}</p>
            <div className="timer__options">
                <button onClick={toggle}>
                    {isRunning ? 'Пауза' : 'Старт'}
                </button>
                <button onClick={reset}>Рестарт</button>
            </div>
        </div>
    );
}

export default TimerOptions;