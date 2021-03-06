import * as React from 'react';
import Svg, { Path, Circle, Defs, Pattern, Use, Image } from 'react-native-svg';

function DontateSvg() {
  return (
    <Svg
      width={140}
      height={140}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path fill="url(#prefix__pattern0)" d="M25 29h90v90H25z" />
      <Circle cx={70} cy={70} r={68.76} stroke="#DDD" strokeWidth={2.481} />
      <Defs>
        <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#prefix__image0" transform="scale(.01042)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default DontateSvg;
