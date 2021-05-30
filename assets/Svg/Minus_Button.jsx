import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Minus_Button(props) {
  return (
    <Svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M10.329 6.372H4.583c-.069 0-.125.068-.125.15v.9c0 .082.056.15.125.15h5.746c.068 0 .125-.068.125-.15v-.9c0-.082-.057-.15-.125-.15z"
        fill="#D9D9D9"
      />
      <Path
        d="M7.456.077a6.896 6.896 0 100 13.79 6.896 6.896 0 000-13.79zm0 12.62a5.726 5.726 0 010-11.45 5.726 5.726 0 010 11.45z"
        fill="#D9D9D9"
      />
    </Svg>
  );
}

export default Minus_Button;
