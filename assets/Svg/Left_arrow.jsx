import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Left_arrow(props) {
  return (
    <Svg width={21} height={18} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M18.174.918h2.596v15.577h-2.596V.918zM0 10.005h11.146l-5.573 5.572 1.835 1.836 8.707-8.706L7.408 0 5.573 1.836l5.573 5.572H0v2.597z"
        fill="#0172FF"
      />
    </Svg>
  );
}

export default Left_arrow;
