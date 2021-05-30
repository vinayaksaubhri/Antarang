import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Arrow() {
  return (
    <Svg width={11} height={16} viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.456 8.438l-9.32 7.237a.165.165 0 01-.266-.13v-1.588c0-.101.047-.198.126-.26L8.438 7.92.996 2.142a.326.326 0 01-.126-.258V.293c0-.137.16-.213.267-.129l9.319 7.237a.657.657 0 010 1.036z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Arrow;
