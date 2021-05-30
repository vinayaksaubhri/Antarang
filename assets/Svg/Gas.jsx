import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Gas() {
  return (
    <Svg width={15} height={25} viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.36 1H3.755a.855.855 0 100 1.71h7.603a.855.855 0 100-1.71zM10.124 2.71H4.992v2.852h5.132V2.711z"
        stroke="#0172FF"
        strokeWidth={0.99}
        strokeMiterlimit={10}
      />
      <Path
        d="M11.07 5.562H4.046A3.045 3.045 0 001 8.607v10.828a3.045 3.045 0 003.045 3.045h7.026a3.045 3.045 0 003.045-3.046V8.607a3.045 3.045 0 00-3.045-3.045z"
        stroke="#0172FF"
        strokeWidth={0.99}
        strokeMiterlimit={10}
      />
      <Path d="M14.116 13.165H1v1.711h13.116v-1.71z" stroke="#0172FF" strokeWidth={0.99} strokeMiterlimit={10} />
      <Path d="M7.748 4.802h-.38v.76h.38v-.76z" fill="#000" stroke="#0172FF" strokeWidth={0.99} strokeMiterlimit={10} />
      <Path
        d="M8.128 4.231h-1.14a.285.285 0 000 .57h1.14a.285.285 0 000-.57z"
        fill="#0172FF"
        stroke="#0172FF"
        strokeWidth={0.99}
        strokeMiterlimit={10}
      />
      <Path
        d="M2.568 22.084S1.595 24 2.736 24h9.504s1.285-.03.357-1.916"
        stroke="#0172FF"
        strokeWidth={0.99}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default Gas;
