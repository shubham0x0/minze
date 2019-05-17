import React from 'react';
import * as Svg from 'react-native-svg';
import { Theme } from '../../theme';

const LinearGradient = ({
  bottom = Theme.background,
  bottom5 = Theme.background,
  fill = Theme.brandPrimary,
  height = 320
}: any) => (
  <Svg.Svg height={height} width="100%">
    <Svg.Defs>
      <Svg.LinearGradient id="grad" x1="50%" y1="100%" x2="50%" y2="0%">
        <Svg.Stop offset="0%" stopColor={bottom} stopOpacity="1" />
        <Svg.Stop offset="5%" stopColor={bottom5} stopOpacity="1" />
        <Svg.Stop offset="100%" stopColor={fill} stopOpacity="1" />
      </Svg.LinearGradient>
    </Svg.Defs>
    <Svg.Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
  </Svg.Svg>
);

export default LinearGradient;
