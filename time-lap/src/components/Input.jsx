import { useRef, memo } from 'react';
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

const Input = memo(function Input({ handleInput, keyId }) {
  const inputs = useRef(null);

  return (
    <>
      <StyledInput
        ref={inputs}
        type='text'
        placeholder='Tag your time'
        className='input'
      />
      <button
        onClick={() => {
          handleInput(inputs.current.value, keyId);
        }}
      >
        set
      </button>
    </>
  );
});

export default Input;
