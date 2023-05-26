/* eslint-disable react/react-in-jsx-scope */
import SVGInline from 'react-svg-inline';
import block from 'bem-cn';

import { ISVGProps } from './types';
import './SVG.scss';

const b = block('SVG-component');

const SVG = ({ svgProps, ...restProps }: ISVGProps) => {
  return (
    <div className={b()} {...restProps}>
      <SVGInline {...svgProps} className={b('content')} />
    </div>
  );
};

export default SVG;
