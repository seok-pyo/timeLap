import { useRef, useState } from 'react';

export default function Lap() {
  const nowTime = useRef(null);

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
    }
  }

  let passedSecond = elapsTime / 1000;
  if (startTime !== null && now !== null) {
    passedSecond += (now - startTime) / 1000;
  }

  return (
    <ol>
      <li id='lap'>
        <p>{passedSecond.toFixed(3)}</p>
        <button onClick={handleStart}>START</button>
        <button onClick={handleStop}>STOP</button>
      </li>
    </ol>
  );
}
