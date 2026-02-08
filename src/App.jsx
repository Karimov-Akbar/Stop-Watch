import TimerOptions from "./widgets/TimerOptions";
import { useTimer } from './hooks/useTimer';

const App = () => {
  const { time, isRunning, toggle, reset } = useTimer();

  return (
    <>
      <TimerOptions
        toggle={toggle}
        reset={reset}
        time={time}
        isRunning={isRunning}
      />
    </>
  )
}

export default App;