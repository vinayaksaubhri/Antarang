import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Plus_Button(props) {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M7.125 3.563a.594.594 0 01.594.593v2.375h2.375a.594.594 0 010 1.188H7.719v2.375a.594.594 0 01-1.188 0V7.719H4.156a.594.594 0 110-1.188h2.375V4.156a.594.594 0 01.594-.593zM0 7.124a7.125 7.125 0 1114.25 0 7.125 7.125 0 01-14.25 0zm7.125-5.938a5.938 5.938 0 100 11.876 5.938 5.938 0 000-11.876z"
        fill="#D9D9D9"
      />
    </Svg>
  );
}

export default Plus_Button;
