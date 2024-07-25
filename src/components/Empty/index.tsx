import React from 'react';
import styleModule from  './index.module.scss'
export type SizeType = 'Small' | 'Big';

interface IEmptyProps {
  imgSrc: string;
  size?: SizeType;
  label?: string;
  style?: React.CSSProperties;
}

const Empty = ({ imgSrc, size = 'Small', style, label }: IEmptyProps) => {
  return (
    <div className={styleModule.empty}>
      <img src={imgSrc} style={style} className={`${styleModule[`img${size}`]}`} alt={''}/>
      {label && <p className={styleModule.label}>{label}</p>}
    </div>
  );
}

export default Empty;