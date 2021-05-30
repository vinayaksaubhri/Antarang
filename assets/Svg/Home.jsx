import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Home() {
  return (
    <Svg width={22} height={21} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M21 9L11 1M1 9l10-8" stroke="#0172FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M4 20V7M18 20V7M4 20h14" stroke="#0172FF" strokeWidth={2} strokeLinecap="round" />
      <Path
        d="M14 9.09V8H8v1.09h1.91c.71 0 1.309.458 1.534 1.092H8v1.09h3.444a1.632 1.632 0 01-1.535 1.092H8v1.316l3.047 3.047h1.542l-3.272-3.273h.592a2.73 2.73 0 002.672-2.181H14v-1.091h-1.42a2.69 2.69 0 00-.503-1.091H14z"
        fill="#0172FF"
      />
    </Svg>
  );
}

export default Home;
