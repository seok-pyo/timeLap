import { useState, useRef, memo } from 'react';
import { styled } from 'styled-components';

const StyledInput = styled.input`
  border: none;
  background: transparent;
  font-size: 16px;
  color: white;
  width: 75%;
  outline: none;

  &::placeholder {
    color: gray;
  }
`;

const Input = memo(function Input() {
  const [inputVal, setInputVal] = useState('');

  const inputs = useRef(null);

  function handleClick() {
    setInputVal(inputs.current.value);
  }

  return (
    <>
      <StyledInput
        ref={inputs}
        type='text'
        placeholder='Tag your time'
        className='input'
      />
      <button onClick={handleClick}>set</button>
    </>
  );
});

export default Input;
