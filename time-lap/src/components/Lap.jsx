import { useRef, useState } from 'react';
import Input from './Input';
import formatter from '../utils/formatter';

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

  function handleRecord() {
    clearInterval(nowTime.current);
    if (startTime !== null) {
      const currentElapedTime = Date.now() - startTime;
      setElapsTime((prev) => (prev += currentElapedTime));
      setLapTime((prev) => {
        return [
          {
            id: Math.random() * 100,
            lapTime: formatter(currentElapedTime),
            title: null,
          },
          ...prev,
        ];
      });
      setStartTime(null);
    }
  }

  let passedSecond = elapsTime;
  if (startTime !== null && now !== null) {
    passedSecond += now - startTime;
  }

  function handleInput(inputValue, id) {
    setLapTime((prev) => {
      return prev.map((time) =>
        time.id === id ? { ...time, title: inputValue } : time
      );
    });
    console.log(lapTime);
  }

  return (
    <>
      <ol>
        <div id='lap'>
          <h1>{formatter(passedSecond)}</h1>
        </div>
        <button onClick={handleStart}>START</button>
        <button onClick={handleRecord}>RECORD</button>
      </ol>
      <ol>
        {lapTime.map((time) => {
          return (
            <li id='lap' key={time.id}>
              <div className='latTime'>{time.lapTime}</div>
              <Input handleInput={handleInput} keyId={time.id} />
            </li>
          );
        })}
      </ol>
    </>
  );
}
