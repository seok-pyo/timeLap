import Lap from './Lap.jsx';
import { styled } from 'styled-components';

const LapContainer = styled.ol`
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  width: 50vw;
`;

export default function Timer() {
  return (
    <>
      <LapContainer id='timer'>
        <Lap />
      </LapContainer>
    </>
  );
}
