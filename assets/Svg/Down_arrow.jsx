import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Down_arrow(props) {
  return (
    <Svg width={18} height={21} viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M16.495 18.174v2.596H.918v-2.596h15.577zM7.408 0v11.146L1.836 5.573 0 7.408l8.707 8.707 8.706-8.707-1.835-1.835-5.573 5.573V0H7.408z"
        fill="#0172FF"
      />
    </Svg>
  );
}

export default Down_arrow;
