import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Basket(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M8.636 1.606a.75.75 0 01.258 1.03L5.073 9h13.851l-3.82-6.365a.75.75 0 011.287-.77L20.674 9h2.576a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H.75a.75.75 0 01-.75-.75v-1.5A.75.75 0 01.75 9h2.575l4.28-7.136a.75.75 0 011.029-.258h.002zM5.09 22.5l-2.22-9H1.416l2.288 9.639a1.125 1.125 0 001.093.86h14.409a1.125 1.125 0 001.095-.86l2.283-9.64h-1.458l-2.219 9H5.091z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Basket;
