import { useState, useEffect } from 'react';
import Props from './Props';

let val3 = 100;

export default function AsyncStateExample() {
  let val = 0;
  let val2 = 0;

  const [cs, setCs] = useState(false);
  // const [count, setCount] = useState(0);
  // const [loading, setLoading] = useState(false);

  // const increment = async () => {
  //   setLoading(true);
  //   console.log('Increment started');

  //   // 비동기 코드 (1초 후 count 증가)
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   setCount((prevCount) => prevCount + 1);

  //   console.log('Increment finished');
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   console.log('Component rendered');
  // }, [count]); // count가 변할 때마다 useEffect 호출

  console.log('val');
  function handleVal() {
    console.log('clicked!', val);
    val++;
    val2++;
    val3++;
    setCs((prev) => !prev);
  }

  useEffect(() => {
    console.log('this is useEffect');
  }, [val]);

  return (
    <div>
      <button onClick={handleVal}>{val}</button>
      <Props val2={val2} />
      <p>{val3}</p>
      {/* <p>Count: {count}</p> */}
      {/* <button onClick={increment}>Increase After 1s</button>
      {loading && <p>Loading...</p>} */}
    </div>
  );
}
