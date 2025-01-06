import { useState, useRef, memo } from 'react';

const Input = memo(function Input() {
  const [inputVal, setInputVal] = useState(null);
  const inputs = useRef(null);
  console.log('input rendered');

  function handleClick() {
    setInputVal(inputs.current.value);
  }
  return (
    <>
      <input ref={inputs} type='text' />
      <p className='inputText'>{inputVal}</p>
      <button onClick={handleClick}>set</button>
    </>
  );
});

export default Input;
