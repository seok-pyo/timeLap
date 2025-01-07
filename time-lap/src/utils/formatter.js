export default function formatter(originTime) {
  let hour = Math.floor(originTime / 1000 / 3600);
  let min = Math.floor(originTime / 1000 / 60) % 60;
  let sec = Math.floor(originTime / 1000) % 60;

  return `${hour !== 0 ? hour + '(h) ' : ''}  ${
    min !== 0 ? min + '(m) ' : ''
  }  ${sec + '(s)'}`;
}
