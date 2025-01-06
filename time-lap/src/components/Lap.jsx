import { useRef, useState } from 'react';
import Input from './Input';

export default function Lap() {
  const nowTime = useRef(null);

  const [lapTime, setLapTime] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [elapsTime, setElapsTime] = useState(0);
  const [now, setNow] = useState(null);

  function handleStart() {
    if (startTime === null) {
      setStartTime(Date.now());
    }
    setNow(Date.now());

    clearInterval(nowTime.current);
    nowTime.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(nowTime.current);
    if (startTime !== null) {
      const currentElapedTime = Date.now() - startTime;
      setElapsTime((prev) => (prev += currentElapedTime));
      setStartTime(null);
      setLapTime((prev) => {
        return [
          {
            id: Math.random() * 100,
            lapTime: (currentElapedTime / 1000).toFixed(2),
            title: null,
          },
          ...prev,
        ];
      });
    }
  }

  let passedSecond = elapsTime / 1000;
  if (startTime !== null && now !== null) {
    passedSecond += (now - startTime) / 1000;
    // [passedSecond, ...lapTimeArray.current];
  }

  return (
    <>
      <ol>
        <li id='lap'>
          <h1>{passedSecond.toFixed(2)}</h1>
        </li>
        <button onClick={handleStart}>START</button>
        <button onClick={handleStop}>STOP</button>
      </ol>
      <ol>
        {lapTime.map((time) => {
          return (
            <li id='lap' key={time.id}>
              <div>{time.lapTime}</div>
              <Input />
            </li>
          );
        })}
      </ol>
    </>
  );
}
